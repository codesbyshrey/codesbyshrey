# Coding Interview Patterns and DSA

Purpose: Algorithm patterns, data structures, interview workflow, and practice strategy.

Source: `library-of-heavens-path/codesbyshrey/2026-04-23 codesbyshrey_notes_organized_digest.md`

## 22.08.2022 — Foundational Learning Plan for Programming, CS, and Technical Interviews

### Context

This section is a broad learning map for becoming technically proficient. It includes programming curricula, data structures, algorithms, coding interview prep, technical question strategy, and study workflow.

### Main Learning Resources

#### The Odin Project

- The Odin Library / Foundations.
- Goal: one exercise a day, even if minimal.

#### W3Schools / W3 Resource Areas

Topics listed:

- HTML
- CSS
- JavaScript
- TypeScript
- Python
- Django
- Node.js
- React
- Git
- PostgreSQL
- C++
- C#
- Java
- SQL
- MySQL
- Data Science
- Pandas
- NumPy
- SciPy
- Statistics
- Angular.js
- Excel
- Kotlin
- AWS Cloud
- AWS Serverless
- MongoDB
- XML

#### Free Certificates / Class Central

Reference:

- `https://www.classcentral.com/report/free-certificates/`

#### freeCodeCamp Certifications

The note says to start at the beginning and lists:

- Responsive Web Design Certification.
- JavaScript Algorithms and Data Structures Certification.
- Backend Development and APIs Certification.
- Scientific Computing with Python Certification.
- Data Analysis with Python Certification.
- Machine Learning with Python.
- College Algebra with Python.
- Coding Interview Prep.
- Data Visualization Certification.
- Front End Development Libraries Certification.

There is also a reminder to double-check whether the “bad website camp” is running throughout August.

#### CS50 / edX Programs

Potential programs:

- Computer Science for Web Programming.
- Computer Science for Artificial Intelligence.
- Computer Science for Python Programming.
- AP Computer Science Principles.
- Game Development.

### Accounting for Note-Taking / Course Time

The notes track lecture/lab material volume:

- L1: 5:05 of material, 70/70.
- L2: 4:40 of material, 75/60.
- L3: 4:35 of material, 40/35.
- L4: 5:25 of material, 95 minutes.
- L5: 5:15 of material, 45 minutes.
- L6: 4:15 of material, 75 minutes.
- L7: 4:05 of material.
- L8: 5:45 of material.
- L9: 4:15 of material.
- L10: 2:15 of material.
- Cybersecurity: 1:30 of material.

### How to Watch / Study Material

The intended workflow:

1. Take notes in the notes section the day before.
2. Watch lab walkthrough videos and explanation videos once without expecting full comprehension.
3. Watch the lecture and code alongside it.
4. Add notes to source-code sections.
5. Recreate lecture source code.
6. Add personal pseudocode to everything.
7. Watch shorts and take notes on them.
8. Code alongside when needed.
9. Use review time to reinforce lab concepts.
10. Start or complete the lab project.
11. Use walkthrough videos to complete the lab by the end of the day when possible.

### Technical Mastery Targets

The note emphasizes:

- Writing optimized code with better time and space complexity.
- Developing strong command of at least one programming language, preferably object-oriented.
- Understanding data structures and algorithms.
- Practicing production-level code:
  - Corner cases.
  - Null checks.
  - Modular code.

### Data Structures and Algorithms Topics

Target topics:

- Arrays
- Linked Lists
- Binary Trees
- Stack / Queue
- Hashing / Heap Sort
- Backtracking
- Graphs
- Dynamic Programming
- Breadth-first search
- Depth-first search
- Recursion
- Big-O analysis

### Learning Resources for DSA

- GeeksforGeeks.
- VisuAlgo.
- Educative.
- Logicmojo.
- LeetCode.
- StackOverflow.

### Technical Interview Strategy

Guidance preserved from the note:

- Do not jump into coding until confident the planned route can solve most or all of the problem.
- Resolve obvious ambiguities before implementation.
- Start with brute force if necessary, but verbalize it as a baseline that can be improved.
- Incrementally improving code demonstrates algorithmic thought process.
- Listen carefully to interviewer hints.
- Speak clearly so the interviewer understands your reasoning, direction, and blockers.
- Ask whether assumptions are acceptable when uncertain.
- Do not over-worry about taking too long to test correctness, because sometimes the interviewer will guide that decision.

### Additional CS Topics

- Operating Systems.
- Computer Networks.
- Database Management Systems.
- OOP and system design principles.

### Digestible Interpretation

This section is the “foundation bootloader” for the entire technical journey. It belongs in:

- `Learning Roadmaps/Programming Foundations.md`
- `Learning Roadmaps/Technical Interview Prep.md`
- `Computer Science/Data Structures and Algorithms.md`
- `Career/Software Engineering Prep.md`

---

## 16.05.2023 — Coding Interview Patterns, Data Structures, Algorithms

### Context

This section captures a technical interview pattern map based on the HackerNoon article “14 Patterns to Ace Any Coding Interview Question.”

Reference:

- `https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed`

Tags:

- `#codingpatterns`
- `#datastructures`
- `#algorithms`

### 1. Sliding Window

Use when:

- Working with a window size over an array or linked list.
- The input is a linear data structure.
- Asked to find a long or short substring.
- Asked to find a desired value within a contiguous range.

Examples:

- Easy: Maximum Sum Subarray of Size K.
- Medium: Longest Substring with K Distinct Characters.
- Hard: String Anagrams.

### 2. Two Pointers / Iterators

Use when:

- Searching for pairs in a sorted array or linked list.
- Comparing values.
- A single iterator would be too continuous or inefficient.
- Working with pairs, triplets, or subarrays.

Examples:

- Easy: Squaring a Sorted Array.
- Medium: Triplets That Sum to Zero.
- Medium: Comparing Strings That Contain Backspaces.

### 3. Fast and Slow Pointers

Also known as Hare and Tortoise.

Use when:

- Working with cyclic linked lists or arrays.
- Finding a position or length related to a cycle.
- You cannot move backward.
- Considering problems such as linked-list palindrome checks.

Examples:

- Easy: Linked List Cycle.
- Medium: Palindrome Linked List.
- Hard: Cycle in a Circular Array.

### 4. Merge Intervals

Use when:

- Intervals overlap.
- Intervals need to be merged based on overlap.
- There are multiple possible relations between two intervals.
- You need to insert intervals or produce mutually exclusive intervals.

Examples:

- Medium: Intervals Intersection.
- Hard: Maximum CPU Load.

### 5. Cyclic Sort

Use when:

- Numbers fall within a given range.
- Each number belongs at a specific index.
- You need to find missing, duplicate, or smallest missing numbers.

Process:

- Iterate one number at a time.
- If a number is not at the correct index, swap it with the number at its correct index.

Examples:

- Easy: Find the Missing Number.
- Medium: Find the Smallest Missing Positive Number.

### 6. In-Place Reversal of Linked List

Use when:

- Reversing links while using existing node objects.
- Avoiding extra memory.

Process:

- Maintain current and previous nodes.
- Reverse the current node’s pointer toward the previous node.
- Continue in lock-step.

Examples:

- Medium: Reverse a Sub-list.
- Medium: Reverse Every K-Element Sub-list.

### 7. Tree Breadth-First Search

Use when:

- Traversing tree levels.
- You need level-by-level traversal.

Process:

- Use a queue.
- Push root to queue.
- Remove node at queue head.
- Visit node.
- Insert children.

Examples:

- Easy: Binary Tree Level Order Traversal.
- Medium: Zigzag Traversal.

### 8. Tree Depth-First Search

Use when:

- Working from root toward leaves.
- Searching near leaf nodes.
- Recursion or iterative stack is appropriate.

Traversal options:

- Preorder: process node first.
- Inorder: process left, node, right.
- Postorder: process children before node.

Examples:

- Medium: Sum of Path Numbers.
- Medium: All Paths for a Sum.

### 9. Two Heaps

Use when:

- A set can be divided into two parts.
- You need smallest values from one side and largest values from another.
- You need a median from a number stream.
- Priority queue or scheduling problems appear.

Structure:

- Min heap.
- Max heap.

Examples:

- Medium: Find the Median of a Number Stream.

### 10. Subsets

Use when:

- Working with permutations or combinations.
- Generating all subsets of a set.

Process:

- Start with empty set `[[]]`.
- Copy current subsets and add the next number.
- Repeat for each element.

Examples:

- Easy: Subsets with Duplicates.
- Medium: String Permutations by Changing Case.

### 11. Modified Binary Search

Use when:

- Given a sorted array, linked list, or matrix.
- Searching for a specific element.

Process:

- Find middle using `start + (end - start) / 2`.
- If key equals middle value, return middle.
- Otherwise search left or right depending on comparison.

Examples:

- Easy: Order-Agnostic Binary Search.
- Medium: Search in a Sorted Infinite Array.

### 12. Top K Elements

Use when:

- Finding top, smallest, or most frequent K items.

Preferred data structure:

- Heap.

Process:

- Insert K elements into min/max heap.
- Iterate through remaining elements.
- Replace as larger or smaller qualifying values appear.

Examples:

- Easy: Top K Numbers.
- Medium: Top K Frequent Numbers.

### 13. K-Way Merge

Use when:

- Merging K sorted arrays or linked lists.

Preferred data structure:

- Heap.

Process:

- Insert first number from each sorted list into a min heap.
- Pop smallest item and add to merged output.
- Insert the next item from the same list.
- Repeat until fully merged.

Examples:

- Medium: Merge K Sorted Lists.
- Hard: K Pairs with Largest Sums.

### 14. Topological Sort

Use when:

- You need linear ordering of elements with dependencies.
- If B depends on A, A must come before B.
- Working with directed acyclic graphs.
- Updating objects/classes in dependency order.

Process:

1. Store graph in adjacency lists using a HashMap.
2. Use another HashMap to track in-degrees.
3. Build graph and populate in-degrees.
4. Add all zero in-degree sources to a queue.
5. Sort by repeatedly removing sources.
6. For each child, decrement in-degree.
7. When a child reaches zero, queue it.
8. Continue until queue is empty.

Examples:

- Medium: Task Scheduling.
- Hard: Minimum Height of a Tree.

### Digestible Interpretation

This section is a high-yield technical interview atlas. It belongs in:

- `Computer Science/DSA Patterns.md`
- `Interview Prep/Coding Patterns.md`
- `Learning Roadmaps/LeetCode Strategy.md`

---
