# AWS Cloud Practitioner Q/A Review

Purpose: fast review sheet built from the provided AWS quiz screenshots, with corrected explanations and exam traps.

Official references:

- AWS Certified Cloud Practitioner overview: https://aws.amazon.com/certification/certified-cloud-practitioner/
- AWS Well-Architected Framework pillars: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html
- AWS Well-Architected Framework definitions: https://docs.aws.amazon.com/wellarchitected/latest/framework/definitions.html
- AWS Operational Excellence design principles: https://docs.aws.amazon.com/wellarchitected/2023-04-10/framework/oe-design-principles.html
- Amazon EC2 Spot Instances: https://aws.amazon.com/ec2/spot/
- AWS Site-to-Site VPN concepts: https://docs.aws.amazon.com/vpn/latest/s2svpn/how_it_works.html
- Amazon ElastiCache overview: https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/RedisAOF.html
- AWS Fargate or AWS Lambda decision guide: https://docs.aws.amazon.com/decision-guides/latest/fargate-or-lambda/fargate-or-lambda.html
- AWS IAM User Guide: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- Amazon EC2 User Guide: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html
- Amazon CloudWatch User Guide: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- AWS CloudTrail User Guide: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html

## How To Use This Sheet

Read the question, cover the answer, then explain why the wrong options fail. Most Cloud Practitioner questions are not testing memorized names alone; they are testing service fit.

## Configuration And Operations

### Q1. Which AWS service is the fully managed configuration management service?

Answer: AWS OpsWorks.

Why: OpsWorks is used for configuration management patterns. In common Cloud Practitioner study material, it is contrasted with services such as CloudWatch, CloudTrail, and CloudFormation.

Trap:

- CloudFormation provisions infrastructure from templates.
- CloudTrail records account and API activity.
- CloudWatch collects metrics, logs, alarms, and operational telemetry.
- OpsWorks is the configuration management answer in this quiz context.

## IAM And Security

### Q2. What AWS IAM feature is used to assign permissions to AWS services?

Answer: IAM Role.

Why: Services such as EC2 and Lambda assume IAM roles to receive temporary credentials. The role has a trust policy that says who can assume it and permissions policies that say what the session can do.

Trap:

- IAM Group applies shared permissions to IAM users.
- IAM Access Advisor helps review service access.
- IAM APIs are how IAM is managed programmatically, not the feature that grants runtime service permissions.

### Q3. In IAM policy evaluation, what happens if one policy denies and another allows?

Answer: Denied.

Why: Explicit deny wins over allow. If there is no matching allow, the result is also denied by default, but that is an implicit deny rather than an explicit deny.

Trap:

- User permissions and group permissions can merge.
- A permissions boundary, session policy, SCP, or resource control policy can cap an otherwise allowed action.
- A deny in any applicable policy path blocks the request.

## Compute And Pricing

### Q4. A workload can run whenever capacity is available. Runtime is not critical, and minimizing cost is the main requirement. Which EC2 purchase option fits best?

Answer: EC2 Spot Instances.

Why: Spot Instances use spare EC2 capacity and can cost far less than On-Demand. They fit flexible, stateless, fault-tolerant, or interruption-tolerant workloads.

Trap:

- On-Demand is flexible but usually costs more.
- Reserved Instances or Savings Plans help when usage is predictable.
- Spot can be interrupted, so the application must handle interruption safely.

### Q5. Which two factors from the quiz impact the price paid for an EC2 instance?

Answer: Storage capacity and instance type.

Why: Instance type affects compute price. Attached storage capacity can add storage cost.

Trap:

- The number of S3 buckets does not determine EC2 instance price.
- Private IP count is not the main EC2 pricing driver in this quiz.
- Availability Zone may matter for capacity and architecture, but the usual pricing dimensions include region, instance type, OS, purchase option, runtime, storage, and data transfer.

## Serverless

### Q6. Which compute resources are serverless? Choose two.

Answer: AWS Lambda and AWS Fargate.

Why: Lambda runs event-driven serverless functions. Fargate is serverless compute for containers, commonly used with Amazon ECS.

Trap:

- Amazon EC2 is not serverless because you manage instance capacity.
- Amazon ECS is a container orchestration service. It can run on EC2 or Fargate.
- Amazon EMR is a managed big data processing service, not the serverless compute answer in this question.

## Reliability And High Availability

### Q7. A user wants EC2 redundancy and fault tolerance. What deployment pattern gives the strongest option from the quiz?

Answer: Deploy over several Availability Zones in more than one AWS Region.

Why: Multiple AZs protect against an AZ-level failure. Multiple Regions add regional fault-tolerance and disaster recovery potential. Elastic Load Balancing and Route 53 can route users to healthy, low-latency resources.

Trap:

- One AZ in multiple Regions still leaves each regional deployment exposed to an AZ-level failure.
- Several AZs in one Region is a strong high-availability pattern, but it does not protect against a full regional outage.
- Multi-Region architectures add cost and operational complexity, so use them when the business requirement justifies it.

## Databases And Performance

### Q8. Which service can be used with other AWS services to improve database request performance?

Answer: Amazon ElastiCache.

Why: ElastiCache is a managed in-memory cache. It can reduce repeated database reads and lower backend load.

Trap:

- Auto Scaling changes compute capacity; it is not a database cache.
- Direct Connect provides private network connectivity.
- EBS provides block storage for EC2.

## Networking And VPN

### Q9. For an AWS managed VPN, what is configured on the Amazon VPC side?

Answer: A virtual private gateway.

Why: In a classic Site-to-Site VPN setup, the AWS side uses a virtual private gateway attached to the VPC. Newer architectures may use a transit gateway. The customer gateway represents the on-premises side.

Trap:

- A customer gateway is the AWS representation of the customer-side device, not the AWS-side VPC gateway.
- A firewall or NAT device is not the managed VPN gateway answer.
- Security groups and route tables still need to allow intended traffic.

## Well-Architected Framework

### Q10. Which option is NOT a pillar of the AWS Well-Architected Framework?

Answer from the quiz: Availability.

Current AWS note: The current Well-Architected Framework has six pillars:

- Operational Excellence
- Security
- Reliability
- Performance Efficiency
- Cost Optimization
- Sustainability

Why: Availability is a design goal and a reliability concern, but it is not one of the named pillars.

Trap:

- Older materials sometimes list five pillars and omit Sustainability.
- The quiz explanation listed five: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization.
- For current study, remember the six-pillar version.

## Operational Excellence Quick Card

The Operational Excellence pillar emphasizes running and improving workloads effectively.

Key practices from the screenshot and AWS guidance:

- Perform operations as code.
- Make frequent, small, reversible changes.
- Anticipate failure.
- Refine operational procedures frequently.
- Learn from operational failures.

Exam framing:

- If the question mentions automation, repeatability, reduced human error, and consistent event response, think operations as code.
- If the question mentions limiting blast radius and easy rollback, think small reversible changes.
- If the question mentions simulated failure, recovery testing, or game days, think anticipate failure and refine operations.

## One-Line Drill Prompts

- EC2 needs S3 access: attach an IAM role to the EC2 instance.
- Five developers need the same permissions: use a group or IAM Identity Center permission set.
- Root user login: lock it down with MFA and avoid daily use.
- Temporary cross-account access: use a cross-account IAM role.
- Prevent bucket deletion: use an explicit deny for destructive S3 actions.
- Flexible, cost-first EC2 workload: use Spot Instances.
- Serverless function: use Lambda.
- Serverless container compute: use Fargate.
- Improve repeated database reads: use ElastiCache.
- AWS-side managed VPN gateway: virtual private gateway or transit gateway, depending architecture.
- Highest quiz redundancy option: multiple AZs across more than one Region.
- Current Well-Architected pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.

## Related References

- [AWS Cloud Practitioner Profile](./aws-cloud-practitioner-profile.md)
- [AWS IAM Reference](./aws-iam-reference.md)
- [AWS Cloud and DevOps Reference](./aws-cloud-devops-reference.md)
- [AWS Developer Associate Exam Review](./aws-developer-associate-exam-review.md)
