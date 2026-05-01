# AWS Cloud and DevOps Reference

Purpose: AWS networking, resilience, deployment, monitoring, and cloud architecture notes.

Source: `library-of-heavens-path/codesbyshrey/2026-04-23 codesbyshrey_notes_organized_digest.md`

## 30.06.2023 — AWS Cloud Practitioner Module 4: Networking Concepts

### Context

This section captures AWS Cloud Practitioner networking lab notes, especially around VPC, routing tables, internet gateways, security groups, EC2, databases, and EFS mounting.

### Scenario

A banking headquarters migrated services to the cloud.

Problems:

- EC2 instances cannot access the internet.
- Databases cannot communicate with instances.

Troubleshooting focus:

- VPC settings.
- Route tables.
- Internet gateway.
- Allowing outside traffic.
- Security groups.

Timing note:

- Security group and route table modifications are applied immediately.
- Internet gateways may take minutes.

Default note:

- By default, VPCs are configured with internet gateways and internet routing.

### Learning Objectives

- Configure a routing table.
- Attach an internet gateway.
- Configure a security group.
- Explore VPC components.
- Configure route tables attached to subnets.
- Configure route table to direct internet-bound traffic to an internet gateway.
- Configure inbound rules within a security group to control access.

### AWS Console / Account Note

- AWS console sign-in URL preserved in source.
- Access code/note: `AWSC390F3F22`, valid until 7.31.

### EFS Mount Commands / Lab Notes

Commands preserved:

```bash
sudo -y
sudo yum install -y amazon-efs-utils
mkdir data
ls
sudo mount -t efs -o tls fs-04e818f5635336de4:/ efs
cd data
cat efs-1-setup.log
sudo bash -c "cat >>efs-1-setup.log" # efs-1 mounted in site C
```

EFS resource:

- `PetModels-EFS-1`
- `fs-04e818f5635336de4`

Credential / badge link:

- `https://www.credly.com/badges/ef46206b-df83-42ac-b0e2-d3b54c44babb/public_url`

### Digestible Interpretation

This section belongs in:

- `Cloud/AWS/VPC Networking.md`
- `Cloud/AWS/EFS Lab Notes.md`
- `Certifications/AWS Cloud Practitioner.md`
- `Commands/AWS Lab Commands.md`

---

## 08.08.2023 — Architecting and Monitoring Applications for Resilience

### Context

This section captures an AWS / DevOps / cloud-native resilience presentation.

### People / Source Context

Mentioned:

- AWS Marketplace Admin: `ajonsso@amazon.com`.
- Leonardo Murillo, Ambassador at DevOps Institute.
- Janardhan Molumuri, Enterprise Support Lead ISV for AWS.
- CEO of Cloud Native Architects.

### Core Theme

Adversity in IT includes:

- Environment.
- Errors.
- Faults.
- Failure.
- Attack.

Resilient systems:

- Adapt to stress and adversity.
- Recover from stress and adversity.
- Assume failure is inevitable.
- Require understanding failure modes.

All resilience patterns focus on handling specific kinds of stress and adversity.

### Resilience Pattern Categories

#### Isolation

Patterns:

- Bulkheads to prevent cascading failure.
- Circuit breakers to prevent known failures from spreading.
- Separation of concerns to reduce overlap.

Note connection:

- Separate concerns resembles interval-style thinking from LeetCode.

#### Scalability

Patterns:

- Autoscaling.
- Orchestration.
- Predictive scaling policies informed by historical data.
- Throughput and load management.
- Throttling.
- Rate limiting.
- Load balancers.

#### Failure Handling

Patterns:

- Asynchronous architectures.
- Retry logic.
- Event replay.
- Idempotence.

Retry logic example:

- Request goes from service to downstream.
- Error comes back.
- Retry goes through.
- Success comes back.
- Code pattern resembles try/catch/else.

Idempotence:

- A property where repeated execution produces the same result.

#### Graceful Degradation

Meaning:

- Maintain limited functionality during failure.
- Some pages or features may continue to work.
- Focus on site reliability, not only availability.

Example:

- Adaptive bitrate in streaming, where video becomes pixelated instead of failing completely.

#### Recovery and Immutability

Meaning:

- If running components do not change, they can be replaced with identical copies.
- Availability-zone copies and CDN distribution help.
- Everything is increasingly stored as code.

Tradeoffs:

- Complexity.
- Cost.
- Operational effort.
- Security effort.
- Environmental impact.
- Absolute resiliency can become prohibitively expensive.

### Five Takeaways

1. Failure is inevitable.
2. Build resilience from the ground up.
3. Apply known patterns rather than reinventing everything.
4. Start small so the system can scale as needed.
5. Focus where it matters and understand user expectations and tolerance for degradation.

### Deploying Resilient Applications on AWS

Architecture components mentioned:

- CloudFront.
- S3.
- ELB / ALB.
- Split feature flags.
- Availability zones.
- Fargate.
- Amazon EKS.
- Autoscaling.
- Aurora.
- Business logic containers.

The note describes:

- Users route through CloudFront.
- CloudFront uses default routing with ALB.
- Static assets use S3.
- CloudFront caches assets to speed content distribution.
- EKS runs vanilla Kubernetes.
- Two pods per data plane within Fargate.
- Ingress manages external service requests into the application.
- Ingress must be configured as needed.

Potential typo preserved conceptually:

- “Margate” likely refers to Fargate in the source note.
- “Elastic Kubernetic Services” refers to Elastic Kubernetes Service, EKS.

### Digestible Interpretation

This section belongs in:

- `Cloud/AWS/Resilient Architecture.md`
- `DevOps/Resilience Patterns.md`
- `Systems Design/Failure Modes and Graceful Degradation.md`
- `Kubernetes/EKS and Fargate Notes.md`

---
