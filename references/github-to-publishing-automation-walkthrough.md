---
aliases:
  - "GitHub-to-Publishing Automation Walkthrough"
tags:
  - template
  - workflow
  - automation
  - publishing
---

# GitHub → Publishing Automation (Markdown to Substack/Email/Medium/LinkedIn)

This walkthrough shows one opinionated way to go from an Obsidian markdown file → GitHub push → automated publishing to newsletter / blog / social channels.

The core pattern is:

> **Obsidian note → Git commit/push → GitHub Action → n8n (or other automation) → Platforms**

You can mix and match pieces, but the *trigger* is always “a markdown file gets pushed to GitHub”.

---

## 0. Prerequisites

- **Tools**
  - Obsidian vault synced to a **GitHub repo** (any workflow you like).
  - A GitHub repo with a branch you treat as your “publish” branch (e.g. `main`).
  - A place to run **GitHub Actions** (enabled by default on GitHub).
  - (Optional but recommended) **n8n** instance (self‑hosted or n8n Cloud).

- **Accounts / Destinations**
  - **Substack** account (or any email newsletter tool that accepts email/API posts).
  - **Medium** account.
  - **LinkedIn** profile (and/or Company Page).
  - Optional extras for later:
    - **Email provider** (SES / Mailgun / SendGrid / your provider of choice).
    - **X/Twitter**, **Facebook Page**, **YouTube channel**.

---

## 1. Design your markdown post format

Create a convention for any note you want to publish. Example frontmatter:

```markdown
---
title: "How I Automate My Publishing Flow"
slug: "automate-publishing-flow"
summary: "End‑to‑end setup for turning Obsidian notes into multi‑platform posts."
status: "ready"        # draft | ready | archived
platforms:
  - substack
  - email
  - medium
  - linkedin
  - twitter
canonical_url: ""      # fill in AFTER first publication if needed
tags:
  - publishing
  - automation
  - writing
---

<main body of the post here>
```

**Conventions (recommended):**

- Put publishable notes in a dedicated folder, e.g. `content/posts/`.
- Only notes with `status: "ready"` and at least one entry in `platforms:` get published.
- Aim for **one post per file** to keep automation simple.

---

## 2. Wire GitHub to fire on markdown pushes

Create a GitHub Actions workflow that runs whenever you push a markdown file inside `content/posts/`.

In your repo, create `.github/workflows/publish-post.yml`:

```yaml
name: Publish Markdown Post

on:
  push:
    paths:
      - "content/posts/**/*.md"

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repo
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install frontmatter parser
        run: npm install gray-matter@4 axios@1

      - name: Detect changed markdown files
        id: changed
        run: |
          CHANGED_FILES=$(git diff --name-only ${{ github.event.before }} ${{ github.sha }} -- 'content/posts/**/*.md')
          echo "files=$CHANGED_FILES" >> $GITHUB_OUTPUT

      - name: Call n8n webhook for each file
        if: steps.changed.outputs.files != ''
        env:
          N8N_WEBHOOK_URL: ${{ secrets.N8N_WEBHOOK_URL }}
        run: |
          node .github/scripts/send-to-n8n.js "${{ steps.changed.outputs.files }}"
```

Notes:

- `N8N_WEBHOOK_URL` will point to a webhook in n8n (set this later).
- You can swap Node for Python if you prefer; Node is just a convenient default.

---

## 3. Add a small helper script to send markdown + metadata

Create `.github/scripts/send-to-n8n.js`:

```javascript
// Minimal script: read changed markdown files, extract frontmatter + body,
// and POST them to n8n.

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const matter = require("gray-matter");

async function main() {
  const filesArg = process.argv[2] || "";
  const files = filesArg.split("\n").filter(Boolean);

  if (!files.length) {
    console.log("No markdown files changed; exiting.");
    return;
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("N8N_WEBHOOK_URL env var not set");
  }

  for (const relativePath of files) {
    const fullPath = path.join(process.cwd(), relativePath);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(raw);

    // Only send posts marked as ready
    if (frontmatter.status !== "ready") {
      console.log(`Skipping ${relativePath} (status is not 'ready').`);
      continue;
    }

    const payload = {
      filePath: relativePath,
      frontmatter,
      body: content.trim(),
      repo: process.env.GITHUB_REPOSITORY,
      commitSha: process.env.GITHUB_SHA,
    };

    console.log(`Sending ${relativePath} to n8n...`);
    await axios.post(webhookUrl, payload);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Commit this script and the workflow. From Obsidian’s point of view, your job is still just:

1. Write note in `content/posts/`.
2. Set `status: "ready"`.
3. `git commit && git push`.

The rest is automated.

---

## 4. Bonus: Use GitHub alone (no n8n) for a single destination

If you **only** care about one destination (for example Medium), you can:

- Skip n8n.
- Have the GitHub Action call the platform API directly from that Node script (or a follow‑up job).

High-level steps:

1. Create an API token in Medium (or your platform of choice).
2. Store it as `MEDIUM_TOKEN` GitHub secret.
3. In the helper script, after parsing the post, send an HTTP POST to Medium’s “create post” endpoint with:
   - `title`, `contentFormat`, `content`, `tags`, and publish status.
4. Repeat similarly for LinkedIn / other APIs if you’re comfortable managing all of that in Actions.

This keeps everything in GitHub but becomes harder to manage as you add more destinations, which is why **n8n is a nicer orchestrator**.

---

# n8n Automation Tutorial (Multi‑Platform)

This is “bonus content” showing you how to let n8n handle Substack, email, Medium, LinkedIn, and later social channels from the same GitHub webhook.

---

## 5. Set up the n8n webhook entrypoint

1. In your n8n instance, **create a new workflow**.
2. Add a **Webhook** node:
   - HTTP Method: `POST`
   - Path: e.g. `/github/publish-markdown`
   - Respond: “When Last Node Finishes” (so you can send a success/failure message).
3. Save the workflow; copy the **Production Webhook URL**.
4. Put that URL into your GitHub repo settings as secret `N8N_WEBHOOK_URL`.

When the GitHub Action runs, it will POST a JSON payload like:

```json
{
  "filePath": "content/posts/2026-02-24-obsidian-automation.md",
  "frontmatter": {
    "title": "My Obsidian → Substack Automation",
    "slug": "obsidian-to-substack",
    "summary": "How I publish directly from Obsidian.",
    "status": "ready",
    "platforms": ["substack", "email", "medium", "linkedin"]
  },
  "body": "# Heading\n\nMain content here...",
  "repo": "your-user/your-repo",
  "commitSha": "abc123..."
}
```

---

## 6. Parse and normalize the post in n8n

Inside your n8n workflow:

1. After the Webhook node, add a **Function** node called “Normalize Post”.
2. Example code:

```javascript
// Input: items[0].json from GitHub webhook
// Output: normalized fields for other nodes

const item = items[0].json;
const fm = item.frontmatter || {};

return [
  {
    json: {
      filePath: item.filePath,
      title: fm.title,
      slug: fm.slug,
      summary: fm.summary,
      status: fm.status,
      platforms: fm.platforms || [],
      tags: fm.tags || [],
      bodyMarkdown: item.body,
      repo: item.repo,
      commitSha: item.commitSha,
    },
  },
];
```

Now all downstream nodes receive a clean payload.

---

## 7. Branch by platform (router pattern)

Add a **Switch** node (or multiple **IF** nodes) called “Route by Platform”:

- Mode: “Expression”
- For each platform, you check whether `platforms` includes it.

Example for a single IF node in n8n:

- Condition: `={{ $json["platforms"].includes("substack") }}`
- If true → Substack branch.
- If false → skip.

Repeat with separate IF nodes for `"email"`, `"medium"`, `"linkedin"`, `"twitter"`, `"facebook"`, `"youtube"`, etc.

This lets you:

- Send some posts only to Substack + email.
- Others to Medium + LinkedIn.
- Others to social threads only.

---

## 8. Substack / email newsletter via n8n

Substack doesn’t have a fully stable public API, but almost every newsletter tool offers **“post by email”**.

### Option A: “Post by email” into Substack (or similar)

1. In your newsletter tool, find the **secret posting email** (usually in settings).
2. In n8n, create an **Email (SMTP)** node:
   - Host: your email provider (e.g. SES/SendGrid/your SMTP).
   - Auth: username/password or API credential.
   - To: the secret Substack address (or other newsletter “post by email” address).
3. Build the email:

   - **Subject**: use the markdown title  
     `={{ $json["title"] }}`
   - **Body**: either send raw markdown, or render basic HTML (you can use a Markdown‑to‑HTML Function node first, or let the newsletter tool do it).

4. Connect this Email node to the Substack branch in “Route by Platform”.

Result: pushing a “ready” note with `platforms: [substack, email]` will send a formatted email into Substack, which turns it into a post + newsletter issue.

### Option B: Email newsletter list (non‑Substack)

- Same pattern as above, but “To” is your mailing list address or “List ID” through your provider’s node.
- You can BCC yourself or a log inbox for debugging.

---

## 9. Medium post via n8n

Assuming you have either:

- A **Medium API token**, or
- An n8n **Medium node** (if available in your version).

### With HTTP Request node

1. Create an **HTTP Request** node “Medium Post”.
2. Method: `POST`.
3. URL: Medium’s “create post” endpoint (check Medium docs for the latest path).
4. Auth: Bearer token with your Medium access token (set via n8n Credentials).
5. Body (JSON):

   - `title`: `={{ $json["title"] }}`
   - `contentFormat`: `"markdown"` or `"html"`
   - `content`: `={{ $json["bodyMarkdown"] }}`
   - `tags`: `={{ $json["tags"] }}`
   - `publishStatus`: `"public"` or `"draft"`

6. Connect this node to the `platforms.includes("medium")` branch.

Medium will then publish the article and return a URL you can optionally write back into GitHub later.

---

## 10. LinkedIn article / post via n8n

There are two main styles:

- **Long form article** (linking to your canonical URL).
- **Short form feed post** with a link and short summary.

The simpler and safer option is usually:

1. Wait until the post exists somewhere canonical (Substack / Medium / your site).
2. Use n8n to create a **LinkedIn share** that:
   - Text: `={{ $json["summary"] || $json["title"] }}` with a one‑sentence hook.
   - Link: your canonical URL.

In n8n:

1. Add a **LinkedIn** node (or HTTP Request node hitting the LinkedIn Share API).
2. Configure with your LinkedIn OAuth credentials.
3. Map fields from the normalized JSON.
4. Connect from the `platforms.includes("linkedin")` branch.

---

# Extra Bonus: Multi‑Channel Social (Twitter, Threads, Facebook, YouTube)

These are best handled *after* you have a canonical URL, but you can also push directly from the markdown.

---

## 11. Twitter / X posts

1. Add an **If** node from “Route by Platform”:
   - Condition: `={{ $json["platforms"].includes("twitter") }}`
2. Under the true branch, add a **Function** node to create tweet‑sized chunks:

```javascript
const maxLen = 260;
const base = `${$json["title"]}\n\n${$json["summary"] || ""}`;
const chunks = [];

let remaining = base.trim();
while (remaining.length > 0) {
  chunks.push(remaining.slice(0, maxLen));
  remaining = remaining.slice(maxLen);
}

return chunks.map(text => ({ json: { text } }));
```

3. Add a **Twitter/X** node (or HTTP Request to X API):
   - Takes `{{$json["text"]}}` as body.
   - Optionally thread the tweets by using the ID from the previous one.

---

## 12. Threads / Facebook Page posts

Patterns are similar:

1. Add branches for `platforms.includes("facebook")` or `"threads"`.
2. For **Facebook Page**:
   - Use n8n’s Facebook node or HTTP request to Facebook Graph API.
   - Post text: `={{ $json["summary"] || $json["title"] }}` plus your canonical URL.
3. For **Threads**:
   - Use an integration or HTTP node if supported (Meta APIs evolve; always check docs).

Keep the content short and link back to the canonical article.

---

## 13. YouTube (description & community posts)

Publishing a **video** still requires a real video file, but you can:

- Use your markdown **summary** as:
  - YouTube video **description template**, or
  - **YouTube Community post** text.

In n8n:

1. Add a branch for `platforms.includes("youtube")`.
2. If you already uploaded a video (manually or via API), store the video ID separately (e.g. in frontmatter or environment).
3. Use:
   - YouTube node or HTTP Request node to:
     - Update video description with `bodyMarkdown` or truncated summary.
     - Or create a community post if your account and API allow it.

Example description template:

```text
{{$json["summary"]}}

---
Full article: https://your-site.com/posts/{{$json["slug"]}}
```

---

## 14. Closing the loop (optional, advanced)

Once everything works, you can:

- Have n8n **write back**:
  - The published URLs for each platform into a JSON file or metadata store.
  - You can manually reflect those URLs into your Obsidian frontmatter later.
- Or have a second GitHub Action that updates frontmatter with `canonical_url`, `medium_url`, `substack_url`, etc. (this is more complex but fully self‑healing).

---

## 15. How to use this from Obsidian (simple mental loop)

1. Draft in Obsidian in `content/posts/`.
2. Fill in frontmatter with:
   - `title`, `summary`, `status: "ready"`, `platforms: [...]`.
3. Commit and push from your local Git workflow.
4. Let GitHub Actions + n8n:
   - Receive the payload.
   - Fan out to Substack/email/Medium/LinkedIn/social.

You stay inside Obsidian and Git; automation handles the rest. When you’re ready, you can refine each branch (copy lengths, per‑platform hooks, scheduling) without changing your vault workflow. 

