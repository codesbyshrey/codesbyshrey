# AWS IAM Reference

Purpose: compact study and implementation reference for AWS Identity and Access Management (IAM), based on the provided IAM image and cross-checked against AWS IAM documentation.

Image source: `E1D96CD2-96D8-48DB-BB15-B553AE3D2490.jpeg`

Official references:

- AWS IAM policy evaluation logic: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- AWS allow/deny evaluation: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic_policy-eval-denyallow.html
- Explicit vs implicit deny: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic_AccessPolicyLanguage_Interplay.html
- IAM security best practices: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
- Root user best practices: https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html
- Access key guidance: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

Related AWS practitioner references:

- [AWS Developer Associate Exam Review](./aws-developer-associate-exam-review.md)
- [AWS Cloud Practitioner Profile](./aws-cloud-practitioner-profile.md)
- [AWS Cloud Practitioner Q/A Review](./aws-cloud-practitioner-qa-review.md)
- [AWS Cloud and DevOps Reference](./aws-cloud-devops-reference.md)

## What IAM Is

IAM, or Identity and Access Management, is AWS's core security service for controlling:

- Who can access AWS.
- What actions they can perform.
- Which resources they can perform those actions on.
- Under which conditions access is allowed or denied.

IAM is used to answer:

- Who is making the request?
- Is the requester authenticated?
- What permissions apply to the requester?
- Does any policy explicitly deny the action?
- Is the target resource covered by the permission?
- Are conditions such as MFA, source IP, region, tags, or organization boundaries satisfied?

## IAM Domain Map

The image frames IAM as a security service touching seven operating domains:

| Domain | What It Covers | Practical Meaning |
|---|---|---|
| Program Governance | Policy and access governance | Define how access should be granted, reviewed, and constrained. |
| Operations | Day-to-day access operations | Provision, rotate, audit, and remove access. |
| User Identity Stores | Identity source | Manage identities directly in IAM or federate from an external identity provider. |
| User Account Provisioning | Account lifecycle | Create, update, deactivate, or remove users and access paths. |
| Credential Management | Passwords, keys, MFA, temporary credentials | Prefer temporary credentials and tightly control long-term credentials. |
| Authentication and Authorization | Login plus permission decision | Authenticate the principal, then evaluate policies for authorization. |
| Identity Governance | Oversight and lifecycle control | Review access, remove unused permissions, and enforce least privilege. |
| Reporting and Auditing | Evidence and monitoring | Use logs, access reports, Access Analyzer, and credential reports. |

## Core IAM Concepts

IAM divides security into identities and permissions.

### Identities

Identities represent who can make a request.

| Identity | Description | Use |
|---|---|---|
| IAM User | A person or application with long-term credentials. | Use sparingly; prefer federation for humans and roles for workloads. |
| IAM Group | A collection of IAM users that share permissions. | Use for role-based access control across users with the same job function. |
| IAM Role | An identity assumed temporarily by a trusted principal. | Use for EC2, Lambda, applications, cross-account access, and federation. |
| Root User | The account owner identity with full account authority. | Lock down with MFA; avoid daily use. |

### Permissions

Permissions define what an identity may do.

| Permission Object | Description | Attached To |
|---|---|---|
| Identity-based policy | JSON policy attached to a user, group, or role. | IAM users, groups, roles. |
| Resource-based policy | JSON policy attached to a resource. | Resources such as S3 buckets, KMS keys, queues, topics, and roles' trust policies. |
| Permissions boundary | Maximum permissions an identity-based policy can grant. | Users or roles. |
| Session policy | Temporary permissions limit for a role or federated session. | STS sessions. |
| Service control policy (SCP) | Organization-level guardrail. | AWS Organizations accounts/OUs. |
| Resource control policy (RCP) | Organization-level resource guardrail. | AWS Organizations resources, where supported. |

## Component Table From The Image

| Component | Description | Strategic Use |
|---|---|---|
| IAM User | Represents a person or app needing long-term credentials. | Best for specific CLI or legacy app cases when federation or roles do not fit. |
| IAM Group | A set of users with shared permissions. | Use for role-based access control across multiple users. |
| IAM Role | Identity assumed temporarily by services or users. | Use for EC2, Lambda, federation, and cross-account setups. |
| Policy | JSON document that defines permissions. | Attach to users, groups, roles, or resources. |

## Policy Anatomy

An IAM policy statement usually answers:

- `Effect`: `Allow` or `Deny`.
- `Action`: API operation, such as `s3:GetObject`.
- `Resource`: target ARN or ARN pattern.
- `Condition`: optional constraints.
- `Principal`: who the statement applies to; required in resource-based policies and trust policies.

Example shape:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::example-bucket/*"
    }
  ]
}
```

Trust policy shape for a role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

## Policy Evaluation Logic

The image's rule of thumb is correct:

- Permissions from a user and group can merge.
- One applicable explicit deny anywhere denies the request.
- No matching allow means denied.
- If a group allows but the user explicitly denies, the result is denied.

### Quick Decision Table

| Scenario | Result | Reason |
|---|---|---|
| User + Group = Allow | Allowed | Permissions can merge. |
| One deny anywhere | Denied | Explicit deny beats allow. |
| No matching policy | Denied | Default is implicit deny. |
| Group allows, user denies | Denied | Deny always wins. |

### AWS Evaluation Summary

1. AWS authenticates the principal, except for services and requests that allow anonymous access.
2. AWS builds the request context: principal, action, resource, conditions, and applicable policies.
3. AWS checks for explicit denies.
4. If any applicable explicit deny exists, the final decision is deny.
5. If no explicit deny exists, AWS looks for an applicable allow.
6. If an applicable allow exists and no boundary, SCP, RCP, or session policy blocks it, the request can be allowed.
7. If no applicable allow exists, the request is implicitly denied.

### Union And Intersection Rules

| Policy Combination | Effective Permission Logic |
|---|---|
| Identity-based + resource-based policy in same account | Union of allows, unless explicit deny applies. |
| Identity-based policy + permissions boundary | Intersection; boundary caps identity permissions. |
| Identity-based policy + SCP/RCP | Intersection with organization guardrails. |
| Role session + session policy | Session policy restricts what the role session can do. |
| Cross-account access | Both the trusted account and trusting resource/account must permit the access path. |

## Architect-Level Decision Table

| Situation | Best Practice |
|---|---|
| EC2 needs S3 access | Attach an IAM role to EC2; avoid storing access keys on the instance. |
| Lambda needs AWS service access | Attach an execution role with least-privilege permissions. |
| Five developers need the same permissions | Create a group and attach a shared policy, or use IAM Identity Center permission sets. |
| Human users need console access | Prefer federation through IAM Identity Center or an external IdP. |
| Root user login | Lock root down, enable MFA, and avoid daily use. |
| Temporary access to another account | Use a cross-account role and `sts:AssumeRole`. |
| Prevent bucket deletion | Add an explicit deny for destructive actions such as `s3:DeleteBucket`; consider SCPs for organization-wide guardrails. |
| CI/CD needs deploy permissions | Use OIDC or role assumption when possible; avoid long-lived static keys. |
| App needs production secret access | Grant the runtime role scoped access to the specific secret or parameter. |
| Team needs admin-like exploration in sandbox | Use scoped sandbox account guardrails, not broad production permissions. |

## Hidden Traps And Exam Alerts

| Trap | Why It Matters | Fix |
|---|---|---|
| User data script does not run | EC2 user data needs a shell directive and runs only under specific launch conditions. | Start with `#!/bin/bash`, check logs, and validate execution context. |
| Access key leaked | Long-lived keys remain valid until rotated or deleted. | Rotate immediately, disable old key, inspect CloudTrail, and move workload to roles. |
| Implicit deny confused with explicit deny | Implicit deny can be overridden with a matching allow; explicit deny cannot. | Know the difference during troubleshooting. |
| IAM user and IAM role treated as the same | Users have long-term credentials; roles are assumed for temporary credentials. | Use users for rare long-term identity cases and roles for workloads/delegation. |
| Attaching policy to EC2 user instead of EC2 role | The instance will not automatically inherit a human user's permission. | Attach an instance profile with the role to EC2. |
| Missing trust policy | Permissions policy may allow actions, but nobody can assume the role. | Configure both trust policy and permissions policy. |
| Permissions boundary misunderstood | Boundary does not grant permissions by itself. | Identity policy must allow, and boundary must also permit. |
| SCP misunderstood | SCP does not grant permissions; it limits the maximum permissions in member accounts. | Use SCPs as guardrails, then grant actual access with IAM policies. |
| Resource policy omitted in cross-account setup | Identity policy alone may not be enough. | Configure resource policy or trust relationship in the target account. |
| Root user access keys exist | Root keys are extremely high-risk. | Delete root access keys unless there is a documented emergency-only reason. |

## Best Practices

### Identity Strategy

- Prefer federation for human users.
- Prefer IAM roles and temporary credentials for workloads.
- Use IAM users only for cases that cannot use federation or roles.
- Use IAM Identity Center for workforce access where possible.
- Separate human access from machine/workload access.

### Root Account

- Enable MFA on the root user.
- Do not use root for daily administration.
- Do not create root access keys.
- Store root credentials securely and use only for root-only account tasks.

### Least Privilege

- Start with AWS managed policies only when learning or bootstrapping.
- Move toward custom least-privilege policies.
- Scope actions to required resources.
- Add conditions where useful: MFA present, source IP, VPC endpoint, requested region, tags, principal attributes, organization ID.
- Use IAM Access Analyzer to validate policies and generate policy suggestions from access activity.
- Regularly remove unused users, roles, policies, permissions, and credentials.

### Credential Management

- Avoid long-lived access keys.
- If long-lived keys are required, rotate them intentionally.
- Never commit access keys to code or notes.
- Use roles for EC2, Lambda, ECS, EKS, and CI/CD when possible.
- Use CloudTrail and credential reports to audit key usage.

### Guardrails

- Use SCPs for organization-wide maximum-permission boundaries.
- Use permissions boundaries when delegating IAM administration.
- Use explicit denies for invariants that must not be bypassed, such as preventing deletion of protected resources.
- Use resource policies carefully; they can grant access outside identity policies depending on service and principal type.

## Troubleshooting Checklist

When access fails:

1. Confirm the principal: user, role, assumed-role session, service principal, or anonymous request.
2. Confirm the action: exact AWS API action name.
3. Confirm the resource ARN.
4. Check whether any explicit deny applies.
5. Check identity-based policies for an allow.
6. Check resource-based policies, especially for S3, KMS, queues, topics, and cross-account access.
7. Check permissions boundaries.
8. Check session policies.
9. Check SCPs/RCPs if the account is in AWS Organizations.
10. Check conditions: MFA, source IP, VPC endpoint, tags, principal ARN, requested region, time, or encryption requirements.
11. Use IAM Access Analyzer and policy simulator-style reasoning.
12. Check CloudTrail for the denied event and the exact request context.

## Common Patterns

### EC2 To S3

Use:

- EC2 instance profile.
- Role trust policy for `ec2.amazonaws.com`.
- Role permissions policy allowing only required S3 actions and bucket/object ARNs.

Avoid:

- Hard-coding access keys in user data.
- Putting developer credentials on the instance.

### Cross-Account Access

Use:

- Role in target account.
- Trust policy allowing the source account or specific role to assume it.
- Permissions policy on target role for the needed actions.
- Optional external ID for third-party access.

### Emergency Stop

Use explicit deny when the business rule must always win.

Examples:

- Deny bucket deletion.
- Deny actions outside approved regions.
- Deny disabling CloudTrail or security monitoring.
- Deny unencrypted object uploads.

## Mental Model

IAM is not only "login." It is the AWS authorization engine.

Think in this order:

```txt
Principal
  -> Action
    -> Resource
      -> Conditions
        -> Explicit deny?
          -> Applicable allow?
            -> Boundaries / SCPs / RCPs / session limits?
              -> Final decision
```

The safest shorthand:

- Default is deny.
- Allow must be explicit.
- Deny always wins.
- Roles are temporary identity.
- Policies are JSON permission logic.
- Guardrails cap access; they do not grant access.
