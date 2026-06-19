# AWS Developer Associate Exam Review

Purpose: review sheet for AWS Certified Developer - Associate (DVA-C02), focused on the practical developer skills behind the certification: building, securing, deploying, debugging, and optimizing AWS cloud applications.

Official exam references:

- AWS Certified Developer - Associate overview: https://aws.amazon.com/certification/certified-developer-associate/
- AWS Certified Developer - Associate exam guide: https://docs.aws.amazon.com/aws-certification/latest/developer-associate-02/developer-associate-02.html
- Domain 1 - Development with AWS Services: https://docs.aws.amazon.com/aws-certification/latest/developer-associate-02/developer-associate-02-domain1.html
- Domain 2 - Security: https://docs.aws.amazon.com/aws-certification/latest/developer-associate-02/developer-associate-02-domain2.html
- Domain 3 - Deployment: https://docs.aws.amazon.com/aws-certification/latest/developer-associate-02/developer-associate-02-domain3.html
- Domain 4 - Troubleshooting and Optimization: https://docs.aws.amazon.com/aws-certification/latest/developer-associate-02/developer-associate-02-domain4.html

Key AWS documentation:

- AWS SDKs and Tools: https://aws.amazon.com/developer/tools/
- AWS Lambda Developer Guide: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
- Amazon API Gateway Developer Guide: https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html
- Amazon DynamoDB Developer Guide: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
- Amazon SQS Developer Guide: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html
- Amazon SNS Developer Guide: https://docs.aws.amazon.com/sns/latest/dg/welcome.html
- Amazon EventBridge User Guide: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html
- AWS Step Functions Developer Guide: https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html
- AWS SAM Developer Guide: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
- AWS CloudFormation User Guide: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
- AWS CodePipeline User Guide: https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html
- AWS CodeBuild User Guide: https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html
- AWS CodeDeploy User Guide: https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html
- Amazon Cognito Developer Guide: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
- AWS IAM User Guide: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- AWS KMS Developer Guide: https://docs.aws.amazon.com/kms/latest/developerguide/overview.html
- AWS Secrets Manager User Guide: https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html
- AWS Systems Manager Parameter Store: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html
- Amazon CloudWatch User Guide: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- AWS X-Ray Developer Guide: https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html

## Exam Snapshot

The Developer Associate exam validates developer-role proficiency in developing, testing, deploying, and debugging AWS cloud-based applications.

Current DVA-C02 scored-content weighting:

| Domain | Weight | What It Means |
|---|---:|---|
| Development with AWS Services | 32% | Build applications with AWS APIs, SDKs, Lambda, event-driven services, and data stores. |
| Security | 26% | Implement auth, IAM access, encryption, secrets, and secure application data handling. |
| Deployment | 24% | Package, test, and deploy applications through IaC and CI/CD workflows. |
| Troubleshooting and Optimization | 18% | Debug defects, interpret logs/metrics/traces, instrument code, and improve performance. |

Exam facts from AWS:

- 65 total questions.
- 50 scored questions and 15 unscored questions.
- Multiple choice and multiple response.
- 130 minutes.
- Passing scaled score: 720 out of 1000.
- Recommended background: at least 1 year of hands-on AWS application development and maintenance.

## Developer Associate Profile

This certification sits above Cloud Practitioner because it expects you to write, package, deploy, secure, and troubleshoot cloud application code.

A strong Developer Associate profile can say:

- I can develop applications that call AWS services through SDKs, APIs, and the AWS CLI.
- I can build serverless workflows with Lambda, API Gateway, EventBridge, SQS, SNS, Step Functions, and DynamoDB.
- I can secure code and data with IAM roles, least privilege, Cognito, KMS, Secrets Manager, and Parameter Store.
- I can package and deploy applications with SAM, CloudFormation, CodeBuild, CodeDeploy, and CodePipeline.
- I can debug and optimize applications using CloudWatch logs, metrics, alarms, dashboards, X-Ray traces, and structured logging.

## Domain 1: Development With AWS Services

Core idea: know how to write resilient application code that integrates with AWS services.

### Application Architecture

Know these comparisons:

- Monolith vs microservices.
- Stateful vs stateless.
- Synchronous vs asynchronous.
- Tightly coupled vs loosely coupled.
- Choreography vs orchestration.
- Fanout patterns with SNS, SQS, EventBridge, and Lambda.

Review links:

- EventBridge: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html
- SQS: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html
- SNS: https://docs.aws.amazon.com/sns/latest/dg/welcome.html
- Step Functions: https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html

### SDK And API Development

Know how to:

- Call AWS services with SDK clients.
- Handle pagination, retries, throttling, and exceptions.
- Use temporary credentials through IAM roles.
- Write unit tests around AWS integrations.
- Use mock clients or local test events where appropriate.

Review links:

- AWS SDKs and Tools: https://aws.amazon.com/developer/tools/
- AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html

### Lambda

Know how to configure and troubleshoot:

- Runtime, handler, timeout, memory, ephemeral storage, environment variables, layers, and extensions.
- Event source mappings, triggers, destinations, and dead-letter queues.
- Concurrency, reserved concurrency, provisioned concurrency, cold starts, and retry behavior.
- VPC access and its networking implications.
- Logging and tracing from function code.

Review links:

- Lambda Developer Guide: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
- Lambda event source mappings: https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html
- Lambda concurrency: https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html

### Data Stores

Know DynamoDB especially well:

- Partition key and sort key design.
- High-cardinality partition keys.
- Query vs Scan.
- Global secondary indexes and local secondary indexes.
- Strongly consistent vs eventually consistent reads.
- Conditional writes.
- TTL.
- Streams.
- Transactions.
- Hot partitions and access-pattern-driven design.

Review links:

- DynamoDB Developer Guide: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
- DynamoDB best practices: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html
- ElastiCache: https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/RedisAOF.html

## Domain 2: Security

Core idea: secure application code and data, not just infrastructure.

### Authentication And Authorization

Know how to:

- Use Cognito for app identity, user pools, identity pools, and bearer-token-based auth patterns.
- Assume IAM roles for service-to-service and cross-account access.
- Use least-privilege IAM policies.
- Make signed authenticated calls to AWS APIs.
- Separate app-level authorization from AWS-level authorization.

Review links:

- Cognito Developer Guide: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
- IAM User Guide: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- IAM policy evaluation: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- Security best practices in IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

### Encryption

Know how to:

- Distinguish encryption at rest and encryption in transit.
- Distinguish client-side and server-side encryption.
- Use KMS keys for encryption and decryption.
- Understand key policies, grants, aliases, rotation, and cross-account key use.
- Use certificates when TLS or private certificate authority patterns appear.

Review links:

- KMS Developer Guide: https://docs.aws.amazon.com/kms/latest/developerguide/overview.html
- KMS key policies: https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html
- AWS Certificate Manager: https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html

### Secrets And Sensitive Data

Know how to:

- Store secrets outside source code.
- Use Secrets Manager for managed secret storage and rotation.
- Use Parameter Store for configuration and secure strings.
- Encrypt sensitive Lambda environment variables.
- Avoid logging tokens, passwords, PII, or PHI.
- Mask or sanitize sensitive values in application responses and logs.

Review links:

- Secrets Manager: https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html
- Parameter Store: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html
- Lambda environment variable security: https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html

## Domain 3: Deployment

Core idea: package, test, and release code repeatably.

### Packaging And Artifacts

Know how to:

- Organize deployment directories and configuration files.
- Package Lambda zip archives and container images.
- Manage dependencies and environment-specific configuration.
- Use repositories and release branches.
- Manage API Gateway stages and Lambda aliases.

Review links:

- Lambda deployment packages: https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html
- API Gateway stages: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-stages.html

### Infrastructure As Code

Know how to:

- Read and update CloudFormation and SAM templates.
- Deploy stacks to dev, test, staging, and production.
- Use parameters, outputs, mappings, and environment-specific values.
- Test event-driven applications with sample events.

Review links:

- AWS SAM: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
- CloudFormation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html

### CI/CD

Know how to:

- Use CodePipeline as the orchestrated workflow.
- Use CodeBuild for build and test steps.
- Use CodeDeploy for deployment strategies and rollbacks.
- Understand blue/green, canary, linear, and rolling deployments.
- Trigger pipelines from repository commits.

Review links:

- CodePipeline: https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html
- CodeBuild: https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html
- CodeDeploy: https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html
- CodeDeploy deployment strategies: https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html

## Domain 4: Troubleshooting And Optimization

Core idea: instrument application code well enough to find and fix problems.

### Root Cause Analysis

Know how to:

- Debug code defects.
- Interpret logs, metrics, and traces.
- Query logs for relevant events.
- Review service output logs for deployment failures.
- Debug integration failures between Lambda, API Gateway, SQS, SNS, EventBridge, Step Functions, DynamoDB, and IAM.

Review links:

- CloudWatch: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- CloudWatch Logs Insights: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html
- X-Ray: https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html

### Observability

Know how to:

- Distinguish logging, monitoring, tracing, and observability.
- Emit structured logs.
- Create custom metrics.
- Use embedded metric format.
- Add trace annotations.
- Configure alarms and notifications.
- Define health checks and readiness probes.

Review links:

- CloudWatch embedded metric format: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html
- CloudWatch alarms: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html
- X-Ray concepts: https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html

### Optimization

Know how to:

- Tune Lambda memory, timeout, concurrency, and cold-start behavior.
- Use caching for repeated reads or content delivery.
- Apply subscription filter policies to reduce unnecessary message delivery.
- Detect bottlenecks from logs and metrics.
- Choose access patterns that reduce scans, hot partitions, and unnecessary service calls.

Review links:

- Lambda performance optimization: https://docs.aws.amazon.com/lambda/latest/operatorguide/perf-optimize.html
- SNS subscription filter policies: https://docs.aws.amazon.com/sns/latest/dg/sns-subscription-filter-policies.html
- CloudFront caching: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html

## High-Yield Service Map

| If The Question Says... | Think... | Common Trap |
|---|---|---|
| Event-driven routing across many services | EventBridge | Do not default to direct Lambda invocation for every integration. |
| Buffer work and decouple producers from consumers | SQS | SNS broadcasts; SQS queues. |
| Fanout to multiple subscribers | SNS | Use subscription filtering when only some subscribers need a message. |
| Coordinate multi-step workflow | Step Functions | Lambda code should not become a fragile workflow engine. |
| Public HTTP API backed by Lambda | API Gateway + Lambda | Remember stages, authorizers, throttling, and mappings. |
| User sign-up/sign-in and tokens | Cognito | IAM is for AWS principals; Cognito is for app users. |
| Secrets in code or env vars | Secrets Manager or Parameter Store | Never hard-code secrets in source. |
| Encrypt/decrypt with managed keys | KMS | Key policy can block IAM permissions if not configured correctly. |
| NoSQL single-digit millisecond access | DynamoDB | Model access patterns first; avoid broad scans. |
| Repeated read pressure on database | ElastiCache | Cache invalidation and TTL matter. |
| Serverless deployment package | SAM / CloudFormation | SAM transforms into CloudFormation. |
| Release strategies and rollback | CodeDeploy | Know canary, linear, all-at-once, rolling, and blue/green. |
| Logs, metrics, alarms, dashboards | CloudWatch | CloudTrail is API audit history, not app monitoring. |
| Distributed traces | X-Ray | Tracing complements logs and metrics. |

## Quick Review Questions

1. When should you use SQS instead of SNS?
   - Use SQS when consumers need durable queue-based processing. Use SNS for pub/sub fanout.

2. When should you use Step Functions instead of chaining Lambda functions manually?
   - Use Step Functions when workflow state, retries, branches, timeouts, and visibility matter.

3. What is the DynamoDB trap behind Query vs Scan?
   - Query uses key conditions and is usually targeted. Scan reads across a table or index and can become expensive and slow.

4. What makes an IAM role better than static access keys for application code?
   - Roles provide temporary credentials and reduce long-lived credential exposure.

5. What is the difference between Secrets Manager and Parameter Store?
   - Secrets Manager is purpose-built for secrets and rotation. Parameter Store is commonly used for configuration and can store secure strings.

6. What does reserved concurrency do for Lambda?
   - It guarantees and caps concurrency for a function, protecting both the function and downstream services.

7. What is the difference between CloudWatch and CloudTrail?
   - CloudWatch is observability for logs, metrics, alarms, dashboards, and events. CloudTrail records AWS account and API activity.

8. Why use a canary deployment?
   - To shift traffic gradually to a new version and reduce blast radius before full release.

9. How do you reduce unnecessary SNS message delivery?
   - Use subscription filter policies.

10. What should you inspect first when API Gateway calls Lambda but receives authorization or integration failures?
    - API Gateway logs, Lambda logs, IAM resource permissions, authorizer configuration, integration mapping, and function error output.

## Relationship To Existing References

- [AWS Cloud Practitioner Profile](./aws-cloud-practitioner-profile.md)
- [AWS Cloud Practitioner Q/A Review](./aws-cloud-practitioner-qa-review.md)
- [AWS IAM Reference](./aws-iam-reference.md)
- [AWS Cloud and DevOps Reference](./aws-cloud-devops-reference.md)
