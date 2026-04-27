# System Design Template

Use this outline to reason through a technical system before or during implementation. It is intentionally rough so it can fit small apps, portfolio projects, and larger production systems.

## System Name

`System, service, or feature name`

## Summary

Briefly explain what the system does and why it exists.

## Goals

- Goal 1.
- Goal 2.
- Goal 3.

## Non-Goals

- Non-goal 1.
- Non-goal 2.

## Users And Clients

Who or what uses this system?

- End users:
- Internal users:
- External systems:
- Admins or operators:

## Core Use Cases

1. Use case 1.
2. Use case 2.
3. Use case 3.

## Requirements

### Functional Requirements

- Requirement 1.
- Requirement 2.
- Requirement 3.

### Non-Functional Requirements

- Latency:
- Availability:
- Scalability:
- Security:
- Privacy:
- Accessibility:
- Observability:

## High-Level Architecture

Describe the major pieces and how they communicate.

```txt
Client
  -> API or server
    -> service layer
      -> database or external service
```

## Data Model

List the main entities and relationships.

- Entity:
  - Fields:
  - Relationships:
  - Notes:

## API Or Interface Design

List the important endpoints, functions, events, or messages.

```txt
GET /example
POST /example
```

For each interface, capture:

- Purpose:
- Input:
- Output:
- Errors:

## Key Flows

### Flow Name

1. User or system starts by:
2. System validates:
3. System stores or retrieves:
4. System returns:

## State And Storage

- What data needs to persist?
- What data can be temporary?
- What needs caching?
- What needs backup or recovery?

## Error Handling

- Expected errors:
- Unexpected errors:
- User-facing messages:
- Retry behavior:
- Fallback behavior:

## Security And Privacy

- Authentication:
- Authorization:
- Sensitive data:
- Secrets:
- Rate limits:
- Audit logs:

## Observability

- Logs:
- Metrics:
- Alerts:
- Dashboards:
- Debugging tools:

## Tradeoffs

Document the main decisions and what each one costs.

- Decision:
- Benefit:
- Cost:
- Why it is acceptable:

## Rollout Plan

- Local development:
- Testing:
- Staging:
- Production:
- Rollback:

## Open Questions

- Question 1.
- Question 2.
- Question 3.
