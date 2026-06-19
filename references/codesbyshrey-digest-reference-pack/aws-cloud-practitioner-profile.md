# AWS Cloud Practitioner Profile

Purpose: a compact profile of the AWS Cloud Practitioner skills, tools, and objectives represented by the certification context and the provided AWS Cloud Quest / quiz screenshots.

Official references:

- AWS Certified Cloud Practitioner overview: https://aws.amazon.com/certification/certified-cloud-practitioner/
- AWS Certification exam guides: https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html
- AWS Well-Architected Framework pillars: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html
- AWS Well-Architected Framework definitions: https://docs.aws.amazon.com/wellarchitected/latest/framework/definitions.html
- AWS Operational Excellence design principles: https://docs.aws.amazon.com/wellarchitected/2023-04-10/framework/oe-design-principles.html
- Amazon EC2 Spot Instances: https://aws.amazon.com/ec2/spot/
- AWS Site-to-Site VPN concepts: https://docs.aws.amazon.com/vpn/latest/s2svpn/how_it_works.html
- Amazon ElastiCache overview: https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/RedisAOF.html
- AWS Fargate or AWS Lambda decision guide: https://docs.aws.amazon.com/decision-guides/latest/fargate-or-lambda/fargate-or-lambda.html
- Amazon S3 User Guide: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
- Amazon EC2 User Guide: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html
- Amazon VPC User Guide: https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html
- Amazon RDS User Guide: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html
- Amazon DynamoDB Developer Guide: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
- Amazon EFS User Guide: https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html
- Elastic Load Balancing User Guide: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html
- AWS Pricing Calculator: https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html

## Profile Summary

Cloud Practitioner competency: build and explain basic AWS cloud solutions across compute, storage, networking, databases, security, reliability, and cost management.

The screenshots show a practical foundation rather than only vocabulary recall. The work covers S3 hosting, EC2 deployment, VPC networking, RDS and DynamoDB database patterns, IAM access control, Auto Scaling, load balancing, EFS shared storage, cloud pricing, and the Well-Architected mindset.

## Cloud Quest Scope

Cloud Quest: Cloud Practitioner frames the role as building basic cloud solutions with AWS services while learning cloud concepts, security concepts, common use cases, billing and pricing models, and business impacts.

The captured assignments show hands-on solution work through automated AWS accounts, which means the profile should emphasize applied console practice, not just certification theory.

## Assignment Map

| Assignment | Business Request | Services / Tools | Objectives Practiced |
|---|---|---|---|
| Cloud Computing Essentials | Migrate a city web portal beach wave size prediction page to AWS for improved reliability. | Amazon S3 | Explain cloud characteristics, AWS benefits, cloud vs on-premises, and static website hosting with S3. |
| Cloud First Steps | Improve reliability and availability for an island stabilization system. | Amazon EC2 | Explain Regions and Availability Zones, AWS infrastructure benefits, and EC2 deployment across multiple AZs. |
| Computing Solutions | Add memory and vertically scale a school scheduling server. | Amazon EC2, Amazon VPC | Identify EC2 instance families and types, vertical scaling, horizontal scaling, and EC2 connection options. |
| Networking Concepts | Build secure networking that allows communication between resources and the internet. | Amazon VPC, Amazon EC2 | Configure VPCs, subnets, route tables, internet gateways, CIDR blocks, NACLs, and security groups. |
| Databases in Practice | Improve relational database performance and availability. | Amazon RDS | Use RDS features, database types, read replicas, vertical/horizontal scaling, and Multi-AZ deployments. |
| Connecting VPCs | Separate department VPCs while allowing VPC-to-VPC communication. | Amazon VPC, Amazon EC2 | Explain and create VPC peering connections, including subnet-specific routing. |
| First NoSQL Database | Add a NoSQL database for a streaming entertainment service. | Amazon DynamoDB | Explain purpose-built databases, DynamoDB features, attributes, elements, and basic setup. |
| File Systems in the Cloud | Share files without provisioning or managing storage. | Amazon EFS, Amazon EC2 | Compare AWS storage options, explain EFS use cases, and configure centralized file storage access. |
| Auto-healing and Scaling Applications | Run auto-healing servers while restricting capacity. | Amazon EC2 Auto Scaling | Create Auto Scaling groups, define resource boundaries, and configure time-based scaling events. |
| Highly Available Web Applications | Build a highly available web application architecture. | Amazon S3, Amazon EC2, EC2 Auto Scaling, Elastic Load Balancing | Use ALB/ELB, health monitoring, Auto Scaling, and highly available architecture principles. |
| Core Security Concepts | Restrict support engineers to authorized actions only. | AWS IAM, Amazon EC2, Amazon RDS | Distinguish IAM users, groups, roles, and policies; apply shared responsibility and compliance concepts. |
| Cloud Economics | Estimate variable cloud architecture costs. | AWS Pricing Calculator, Amazon EC2 | Explain AWS pricing estimates and model architecture costs. |

## Skill Areas

### Cloud Foundations

- Explain AWS cloud value: elasticity, reliability, managed services, global infrastructure, and pay-as-you-go pricing.
- Compare AWS services with on-premises infrastructure.
- Translate business requests into basic AWS architectures.

### Compute

- Choose EC2 instance families and instance types based on workload requirements.
- Use vertical scaling when a single instance needs more CPU, memory, or storage.
- Use horizontal scaling when capacity should grow across multiple instances.
- Recognize purchase options: On-Demand, Reserved Instances, Savings Plans, and Spot Instances.
- Use Spot Instances for flexible, fault-tolerant, interruption-tolerant workloads where cost minimization matters.
- Identify serverless compute patterns with AWS Lambda and AWS Fargate.

### Storage

- Use Amazon S3 for object storage and static website hosting.
- Use Amazon EFS for shared, managed file storage across compute resources.
- Separate object, block, and file storage decisions.

### Networking

- Design basic VPC structures with subnets, internet gateways, route tables, CIDR blocks, security groups, and network ACLs.
- Use VPC peering when separate VPCs need private connectivity.
- For AWS managed VPN, identify the AWS-side gateway as a virtual private gateway or transit gateway and the customer-side representation as a customer gateway.
- Understand that route tables and security groups both matter for reachability.

### Databases

- Use Amazon RDS for managed relational databases.
- Use RDS read replicas to improve read performance.
- Use RDS Multi-AZ deployments to improve availability.
- Use Amazon DynamoDB for managed NoSQL key-value and document workloads.
- Use Amazon ElastiCache to reduce database load with in-memory caching.

### Security And IAM

- Distinguish IAM users, groups, roles, and policies.
- Use IAM roles for AWS services such as EC2 and Lambda instead of long-lived access keys.
- Understand that explicit deny overrides allow and that no matching allow means default deny.
- Apply the shared responsibility model: AWS secures the cloud; customers secure what they put in the cloud.

### Reliability And Availability

- Deploy across multiple Availability Zones for regional high availability.
- Deploy across multiple Regions when the scenario calls for stronger disaster recovery and regional fault tolerance.
- Use load balancers, health checks, Auto Scaling groups, and Route 53 routing patterns.
- Tie availability goals to cost, complexity, recovery time, and recovery point requirements.

### Operations And Well-Architected Thinking

- Current AWS Well-Architected has six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.
- The screenshot's quiz explanation listed the former five-pillar set; treat that as historically common exam phrasing, but keep the six-pillar set current.
- Operational Excellence practices include operations as code, small reversible changes, anticipating failure, learning from failures, and refining procedures frequently.

### Cost And Business Impact

- Use AWS Pricing Calculator to estimate architecture costs.
- Know the common cost drivers for EC2: instance type, purchase option, storage, operating system, region, running time, and data transfer.
- From the quiz options, storage capacity and instance type were the key price factors.
- Choose managed services when they reduce operational burden, but still model cost impact.

## Tools And Services Learned

| Category | AWS Tools / Services | Practical Use |
|---|---|---|
| Compute | EC2, Lambda, Fargate, EC2 Auto Scaling | Run virtual machines, serverless functions, serverless containers, and self-healing fleets. |
| Storage | S3, EFS, EBS | Host static content, share file systems, and attach block storage to instances. |
| Networking | VPC, subnets, route tables, internet gateways, security groups, NACLs, VPC peering, Site-to-Site VPN | Connect and secure cloud resources. |
| Databases | RDS, DynamoDB, ElastiCache | Run relational, NoSQL, and caching layers. |
| Security | IAM users, groups, roles, policies, shared responsibility model | Control access and responsibilities. |
| Reliability | ELB/ALB, Route 53, Auto Scaling health checks, Multi-AZ, multi-Region patterns | Route traffic and recover from failures. |
| Cost | AWS Pricing Calculator, EC2 pricing models, Spot Instances | Estimate and optimize cloud spend. |
| Operations | OpsWorks, CloudFormation, CloudTrail, CloudWatch, Well-Architected Framework | Manage configuration, infrastructure, auditing, monitoring, and architecture quality. |

## Portfolio Profile Bullets

- Built AWS Cloud Practitioner-level solution maps across S3, EC2, VPC, RDS, DynamoDB, EFS, IAM, Auto Scaling, and Elastic Load Balancing.
- Practiced translating business scenarios into AWS architectures with reliability, security, performance, and cost tradeoffs.
- Demonstrated working knowledge of IAM access patterns, including users, groups, roles, policies, default deny, and explicit deny.
- Practiced cloud cost reasoning with AWS Pricing Calculator, EC2 purchase options, instance type selection, storage sizing, and Spot Instance tradeoffs.
- Reviewed Well-Architected operational practices: operations as code, small reversible changes, failure anticipation, procedure refinement, and learning from failures.

## Study Gaps To Keep Sharp

- Know when a solution needs Multi-AZ, multi-Region, or both.
- Distinguish ECS from Fargate: ECS is orchestration; Fargate is serverless container compute.
- Distinguish CloudFormation from OpsWorks: CloudFormation provisions infrastructure as code; OpsWorks is configuration management.
- Distinguish CloudTrail from CloudWatch: CloudTrail records account/API activity; CloudWatch collects metrics, logs, alarms, and operational telemetry.
- Distinguish IAM groups from IAM roles: groups organize users; roles are assumed temporarily by services, users, or accounts.

## Related References

- [AWS IAM Reference](./aws-iam-reference.md)
- [AWS Cloud Practitioner Q/A Review](./aws-cloud-practitioner-qa-review.md)
- [AWS Cloud and DevOps Reference](./aws-cloud-devops-reference.md)
- [AWS Developer Associate Exam Review](./aws-developer-associate-exam-review.md)
