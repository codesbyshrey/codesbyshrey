# Backend API and System Design Reference

Purpose: Core backend/system-design topics, API gateway notes, distributed system concepts, and UX-to-system translation.

Source: `library-of-heavens-path/codesbyshrey/2026-04-23 codesbyshrey_notes_organized_digest.md`

## 29.07.2023 — System Design / UI-UX Fundamentals

### Context

This second July 29 section covers system design, UI/UX process, networking, database concepts, protocols, scalability, and observability.

### Product / UX Design Process

#### Step 1 — User Flow Diagram

Map:

- Landing.
- Learn how it works.
- Find categories.
- Select categories.
- View design inspirations.

#### Step 2 — Wireframes

Create corresponding pages/screens for the user flow.

Tools mentioned:

- Balsamiq.
- Excalidraw.
- Figma/Sigma note.
- FigJam.

#### Step 3 — Design System

Define:

- Color scheme.
- Real-time colors.
- User experience.
- Intuitiveness.

#### Step 4 — Actual Design

Focus on:

- Visual hierarchy.
- Contrast.
- Balance.
- Consistency.
- Simplicity.
- Feedback.

### System Design Concepts

1. **Vertical Scaling**: add compute and processing power as needed. Simple but costly.
2. **Horizontal Scaling**: add replicas. Better for fault tolerance and redundancy, but more complex.
3. **Load Balancers**: reverse proxies using strategies such as round robin and hashing.
4. **CDN**: content delivery networks, often tied to geographic availability zones.
5. **Caching**: copies of data for faster read queries.
6. **IP Address**: Internet Protocol address.
7. **TCP/IP**: Internet Protocol Suite. TCP splits information into packets. UDP also exists.
8. **DNS**: Domain Name System translates names to IP addresses.
9. **HTTP**: Application-layer protocol using client-server model and RESTful patterns. Includes request headers and request bodies. WebSockets are built on TCP; TCP is lower level.
10. **REST**: stateless and consistent. Common status codes include 200, 400, and 500 classes.
11. **GraphQL**: allows a single query requesting specific resources, reducing overfetching.
12. **gRPC**: server-to-server communication framework/protocol using protocol buffers. More efficient than JSON because it is binary, though JSON is more human-readable. gRPC Web exists.
13. **WebSockets**: useful for chat applications and bidirectional communication. Avoids constant HTTP polling.
14. **SQL**: Structured Query Language for efficient structured querying.
15. **ACID**: atomicity, consistency, isolation, durability. The source note listed durability, isolation, consistency, atomicity; all four are preserved here.
16. **NoSQL**: data without traditional relational structure. Includes key-value, graph, and document storage.
17. **Sharding**: horizontal scaling of NoSQL or databases through shard keys. Powerful but complex.
18. **Replication**: read-only copies. Leader-follower replication is common; leader-leader is more complex. Availability zones matter.
19. **CAP Theorem**: consistency, availability, partition tolerance. In distributed systems, you usually trade among these.
20. **Message Queues**: queue/store messages when systems produce more data than downstream services can process. Helps persist and unpack work.

### Observability

Three pillars:

- Logs.
- Metrics.
- Traces.

### Digestible Interpretation

This section is a compact systems-design primer. It belongs in:

- `Systems Design/System Design Basics.md`
- `UX Design/User Flow Wireframes Design Systems.md`
- `Cloud and Web/Protocols and Distributed Systems.md`
- `Observability/Logs Metrics Traces.md`

---

## 14.08.2023 — API Gateways

### Context

This section summarizes API gateways from a Gaurav Sen video.

Reference:

- `https://youtu.be/RbMxB_Cyx6A`

Tags:

- `#API`
- `#SystemDesign`

### Definition

An API gateway is a server that exposes internal service APIs to external client devices, typically through HTTP.

### Role in System Design

API gateways:

- Use design patterns like REST and GraphQL.
- Allow clients to get and update data through servers.
- Work with CDNs and DNS to ensure fast and reliable user-request handling.

### Core API Gateway Functions

1. Authentication and authorization.
2. Request transformation.
3. Request validation.
4. Rate limiting.
5. Routing.
6. Load balancing.

### Digestible Interpretation

This section belongs in:

- `Systems Design/API Gateways.md`
- `Backend/REST GraphQL and Gateway Patterns.md`
- `Cloud/API Management.md`

---
