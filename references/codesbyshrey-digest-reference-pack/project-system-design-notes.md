# Project and System Design Notes

Purpose: Product/system notes from SITAC, CCnC, Spotlist, and app planning that can seed future builds.

Source: `library-of-heavens-path/codesbyshrey/2026-04-23 codesbyshrey_notes_organized_digest.md`

## 24.12.2022 — SITAC 2023 Project: Volunteer Donation Platform

### Context

This section defines a nonprofit technology project for SITAC 2023. It includes problem definition, vision, similar solutions, solution expansion, questions, scope assumptions, architecture concerns, and deliverables.

### Problem Definition

The system should improve:

- The ability and likelihood of individuals to donate.
- The ability for volunteers to collect and distribute donated items.
- Understanding of the types of individuals who donate.
- Support for places that collect donations.
- Schedule management and logistics.
- Accountability.
- Togetherness and community among donors and volunteers.
- Data collection to determine whether the business model should be improved before replicating in other areas.

Additional scale notes:

- States, cities, and locations matter.
- More receiving organizations may be added.
- The system should work seasonally and annually.

### Vision

Create:

- An application.
- A website.
- A server for data storage and collection.

The applications should be:

- Simple enough for anyone to volunteer.
- Useful for making a difference.
- Paired with marketing and social media strategy to increase donations and volunteer involvement.
- Simple for volunteers.
- More robust for users interacting with data.
- Secure enough to protect volunteer identities and demographic data.
- Realistic, cost-effective, realizable, and fit for purpose.

Core architecture areas:

- Front end.
- Server.
- Back end.
- Username/password login for:
  - Receiving organizations.
  - Volunteers collecting donations.
  - Volunteers distributing donations.

### Similar Solutions / Analogies

The system was compared to:

- Bridal or wedding registry.
- Instacart.
- Value Village.
- Goodwill.
- Issaquah Food Bank.
- Turkey Trot.

These analogies suggest the system has elements of:

- Registry / item wish lists.
- Delivery logistics.
- Donation intake.
- Local civic participation.
- Event-based mobilization.

### Points of Expansion

#### Volunteer Application

- Must remain simple.
- Should scale beyond food and clothing.
- Should gather donor demographics.
- May mirror an application for non-volunteer donors.

#### Donor Website

- Must remain simple.
- Should include community gathering beyond donation.
- Could become a one-stop shop for other local places.

#### Scheduling / Logistics

- Schedule management and supply-chain logistics must be robust.
- Third-party organizations are involved.
- Local connection points and collection points matter.
- A mirror website for volunteers may be useful.

### Key Questions

1. What are the differences between volunteers helping the organization and individuals who donate?
2. Are local events tied to existing forms of community in the geographic area, or are they exclusively volunteer-driven?
3. What are the existing operational differences across the 30 states?
4. What are the existing formats for collecting donations?
5. What is the process from collection to distribution?

### Welcome Registration Packet Notes

- Mentor with practical insights on building IT solutions: Appa.
- A good architecture satisfies quality attributes such as security, performance, and availability by balancing them.
- The solution should be realistic, cost-effective, realizable, and fit for purpose.

### Problem Scope / Assumptions Prompts

The expected written deliverables include:

1. A 300-word summary defining the problem in your own words.
2. A 200-word idea or vision of the solution that addresses the need, without stating requirements.
3. A 100-word description of what the system will do in scope.
4. A bulleted list of key functionalities.
5. A list of important non-functional quality attributes and scenarios.
6. Items explicitly out of scope.
7. Assumptions, including technical, financial, legal, and environmental factors.
8. Questions or clarifications for key customers and stakeholders.

### Problem Statement

The organization is:

- 100% volunteer-based.
- Operating in 30 states.
- Focused on togetherness and the welfare of society during festival celebrations.
- Focused on empathy toward the less fortunate.

Current process:

- Organization reaches out to groups and organizations to collect and donate nonperishable food items within three weeks.
- Volunteers create marketing messages.
- Local collection points, such as homes, are organized.
- Door-to-door campaigns and community events are used.
- Food banks and shelters help distribute collected items.
- Cash donations are not accepted.
- Distribution is coordinated during the same week across the country in October.

Follow-up activities include:

- Capturing details of distribution.
- Capturing data on individuals and organizations participating.
- Creating highlights for social media.
- Sending thank-you messages.
- Publishing a report.
- Sending a press release.
- Providing schedule management for delivery of items.

### Opportunities

1. Profile individuals who participate in giving.
2. Engage individuals more effectively by connecting them to receiving organizations.
3. Suggest types of food to improve nutritional value and meet individual needs without increasing cost.
4. Determine what to capture about participating organizations and what analysis would be useful.
5. Support expansion into more cities, states, and locations.
6. Explore predictive models to select future locations.
7. Quantify volunteer effort through a simple app.
8. Plan year-round activities to keep participants involved beyond October.
9. Increase visibility among people, organizations, and civic bodies.
10. Analyze trends of past activities and recommend new ones based on location, audience, and festival.

### Systems Lens

The project should be organized through:

- People.
- Process.
- Technology.
- Information / data.
- Security.
- Investment / returns.
- Timeline.

### Idea Organization

#### Data Capture and Storage

Capture:

- Organization data for continuous contribution and communication.
- Volunteer details.
- Potential volunteer details.
- Receiving organization details.
- Donation distribution methods.
- Groups and organizations needing assistance.
- Administration data.
- Modules for all relevant data inputs.

#### Analytics

Use analytics to:

- Understand the entities involved.
- Evaluate effectiveness.
- Guide future direction.

#### Platform and Scale

The system should:

- Support different form factors.
- Consider a standard cloud platform for development and deployment.
- Begin with U.S. scope.
- Extend globally later.
- Consider GDPR and other data restrictions.
- Scale to over 5,000 domestic users.
- Support custom localization of some features.

#### Functional Areas

- Types of food.
- Scheduling options.
- Volunteer registration.
- Volunteer scheduling app.

### Deliverables

- Scope, epics, and user stories.
- Business process and UI/UX.
- Information architecture and analytical reporting.
- Software and security architecture.
- Deployment infrastructure.
- Technology stack.
- Execution plan.

### Digestible Interpretation

This is a complete civic-tech/product-systems case study. It can become:

- A portfolio project.
- A systems architecture case study.
- A UX research case study.
- A nonprofit operations analytics project.
- A cloud deployment planning project.

Suggested folders:

- `Projects/SITAC Donation Platform/`
- `Portfolio Case Studies/SITAC Civic-Tech Platform.md`
- `Systems Design/Volunteer Logistics and Donation Systems.md`
- `UX Research/Nonprofit Donor and Volunteer Experience.md`

---

## 04.06.2023 — CCnC Side Project: Financial Visualization and Expense Classification

### Context

This section describes a side project around business finances, spend classification, accounting friction, and decision-support dashboards.

### Situation

The organization is:

- Getting revenue but spending money.
- Working with disparate financial information.
- Involving Appa and an Australia-based person managing U.S. operations.

Core question:

- Are they doing the right things?
- Are things optimized?
- Are the current choices producing the right returns?

### Desired Output

Create a visualization of the last 36 months of data across different spending types.

### Development Context

Spending categories include:

- Marketing.
- Sales.
- Product licenses.
- Logistics.

Decision questions:

- Are we on the right track?
- Can the visualization be drilled down differently?
- Can it help answer a question?
- Can it answer the question outright?
- Should the solution be iterative and drive decisions?
- Is budget being used correctly?

### Data / Accounting Issues

Problems noted:

- Expenses may be listed differently.
- Checks may be split into subcategories.
- Need to decide between combo visualizations and singular visualizations.
- Essential expenses, such as utilities, may spike.
- Travel for marketing vs. conferences may need separation.
- Consumables may need their own category.
- SG&A / sales and general administrative expenses need attention.

### Accounting Concepts

- General ledger includes cash flow and asset movement.
- Chart of accounts differentiates categories, such as utilities.

### Motivation

Classification differences cause CPA issues every year.

Estimated issue:

- Around 2 months of delay/friction.
- Around 12 hours mentioned in the note.

Potential market impact:

- General market trend of 4–6x ROI.

Consulting timeline:

- 8–10 weeks.

### Possible Tools / Technical Directions

- OSS tools.
- GnuCash.
- SQLite.
- XML.
- XML to Excel pipeline.

### Process Notes

- Use intuitive solutions first.
- Repeat problem statement in your own words.
- Clarify timeline and design.
- Develop LinkedIn phrases.
- Identify schema root.
- Parse XML.
- Identify roots.
- Ask about 4–5 roots identified so far.

### Digestible Interpretation

This is a finance-ops analytics case study. It could become:

- A dashboarding project.
- A data cleaning case study.
- A business process automation project.
- A financial data pipeline portfolio project.

Suggested folders:

- `Projects/CCnC Finance Analytics/`
- `Data Analytics/Accounting Data Cleaning.md`
- `Portfolio Case Studies/Expense Classification Dashboard.md`
- `Business Systems/General Ledger and Chart of Accounts.md`

---

## 26.06.2023 — Spotlist Internship / Full-Stack Onboarding / Trello Workflow

### Context

This section captures onboarding notes for Spotlist, an unpaid internship or project involving full-stack software engineering, React Native, Django, AWS, and a service booking app.

### Spotlist Task Board Process

New Trello card should include:

- Primary task description.
- To Do status.
- Backend/frontend designation.
- Advisors.
- Movement from To Do to Doing.
- Date and specific notes.
- Continuous updates.

### Virtualization / Emulator Setup

To enable VT:

1. Hold Shift and click Restart from Advanced Restart.
2. Look for Intel VT-x or similar virtualization settings.
3. Press F10 to save changes.
4. Reboot after enabling.

Possible BIOS locations:

- Processor.
- Chipset.
- Northbridge.
- Advanced chipset control.
- Advanced CPU configuration.

### What Got Done

- Troubleshot emulator launch on Windows.
- MacBook expected back Wednesday morning, possibly Tuesday evening.
- Coordinated with Nason to understand his workflow.
- Read through backend and frontend pages/file paths.
- Noted service provider types:
  - NailTech.
  - MassageTherapist.
  - Esthetician.

### To Do

- Create GitHub branch for MacBook.
- Create GitHub branch for Windows.
- Practice good commits daily.
- Observe Trello task board.

Suggested Trello workflow:

- To Do.
- Doing.
- Blocked / Stuck On.
- In Review.
- Integration.
- Connect.

For cards:

- Add card.
- Give task a title.
- Add short summary.
- Assign members.
- Set estimated completion date.

### Trello Labels / Categories

- Blocked.
- In review.
- Urgent todo.
- Integration/connect.
- stripeAPI.
- Discord server.
- Use GitHub server properly.
- Basic todo list.

### People / Team Notes

- Brandon: lead backend.
- Zhi: lead frontend.
- Houman: OG.
- Andrew Min.
- Arya Thakur.
- Avery Dinh.
- ck12345.
- Haofan.
- Nason Moy.
- Pearlsea.
- Siyu.
- Stephanie.
- Ty / Tyson.
- Xiaomeng.
- Xin.
- Yutong.
- Christine C: hiring team.

### Schedule / Expectations

- Wednesday/Thursday: look over everything.
- Emulators and setup by Friday or so.
- Onboarding and coding later that day.
- Internship is unpaid.
- Duration: up to 3–6 months.
- Expectations: challenge or enhance.
- Minimum of 15 hours/week was questioned.
- Possible work time: 8:30–11:30 PM EST / 5:30–8:30 PM PT.

### Role Description

Full Stack / Frontend Software Engineers:

- Design and implement testable and scalable code.
- Work on high-performance business application.
- Service booking app for clients and experts.
- App in Beta IV.

### Business / Product Notes

- Backend data.
- Geographic features.
- Visualizations.
- GPS.
- Sales or more.
- Potential permanent position once app goes to market.
- Non-contractual internship.
- Interns can exit at any point with two weeks notice for offboarding and NDA review.

Revenue streams considered:

- On-demand bookings.
- Product sales.
- Ads.
- Brand sponsorships.
- Question: what are all seven streams of income?

### Senior Engineering Context

Prior or senior engineers included:

- 10+ year engineers.
- Previous Lead Backend Security Engineer for Venmo/PayPal.
- Lead commerce engineer for Spotify.

Prior interns/technologies:

- Designed and implemented scalable RESTful APIs with Django.
- Integrated databases for reliable and efficient data exchange.

### Skillsets and Tools

- React Native, frontend.
- REST API, backend.
- Django, backend.
- Postman.
- AWS Elastic Beanstalk.
- AWS S3.
- PostgreSQL.
- JavaScript.
- Python.
- CSS.

### Digestible Interpretation

This is a work-experience onboarding note and can be converted into a portfolio-experience record.

Suggested folders:

- `Experience/Spotlist Internship/Onboarding Notes.md`
- `Projects/Spotlist Service Booking App/`
- `Software Engineering/Team Workflow and Trello.md`
- `Career/Experience Bullet Raw Material.md`

---
