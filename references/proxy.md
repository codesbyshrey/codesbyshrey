# Proxy Pattern Reference

A proxy is a wrapper that sits between your code and another object, service, API, or library. Instead of calling the dependency directly everywhere, your app calls the proxy.

For web apps, a common proxy is an HTTP service wrapper around `fetch`, `axios`, or a third-party SDK.

## Why Use A Proxy

Use a proxy when you want to:

- Keep third-party code out of components and business logic.
- Swap `fetch`, `axios`, or another client later with less refactoring.
- Put auth headers, base URLs, retries, and error handling in one place.
- Make tests easier by mocking one service instead of many direct calls.
- Keep API behavior consistent across the app.

## When It Helps

A proxy is useful when:

- Many files call the same service.
- Requests need shared headers or tokens.
- The app may switch API clients later.
- You want cleaner components.
- You want one place to normalize response and error handling.

It may be unnecessary when:

- There is only one simple request.
- The wrapper adds no shared behavior.
- The abstraction hides useful details without reducing complexity.

## Basic Shape

```txt
Component or feature code
  -> calls API service
    -> API service calls fetch, axios, SDK, or external dependency
      -> external service responds
```

## Example HTTP Proxy

```js
class HTTPService {
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }

  async request(path, options = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  get(path, options = {}) {
    return this.request(path, {
      method: "GET",
      ...options,
    });
  }

  post(path, body, options = {}) {
    return this.request(path, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  }
}

export default new HTTPService("https://api.example.com");
```

## Example Usage

```js
import { useEffect, useState } from "react";
import HTTPService from "./HTTPService";

function ExampleResource() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    HTTPService.get("/resource")
      .then(setData)
      .catch(error => setError(error.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return <div>{data.title}</div>;
}
```

## Good Proxy Design

Keep the proxy:

- Small enough to understand quickly.
- Focused on shared behavior.
- Easy to mock in tests.
- Consistent about errors and return values.

Avoid:

- Rebuilding an entire HTTP client from scratch.
- Mixing UI state into the service layer.
- Adding a proxy when direct code is clearer.
- Returning different response shapes from similar methods.

## Quick Checklist

- Does this wrapper remove repeated request code?
- Does it make testing easier?
- Does it hide third-party details from the rest of the app?
- Does it keep errors, auth, and headers consistent?
- Is the abstraction simpler than the thing it replaces?