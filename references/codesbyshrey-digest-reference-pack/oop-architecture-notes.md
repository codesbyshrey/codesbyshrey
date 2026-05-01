# Object-Oriented Programming and Architecture Notes

Purpose: OOP concepts and architecture vocabulary for implementation and interviews.

Source: `library-of-heavens-path/codesbyshrey/2026-04-23 codesbyshrey_notes_organized_digest.md`

## 29.07.2023 — Object-Oriented Programming 101

### Context

This section explains OOP fundamentals: abstraction, polymorphism, inheritance, encapsulation, overriding, and overloading.

### Core OOP Concepts

The four main OOP principles:

- Abstraction.
- Polymorphism.
- Inheritance.
- Encapsulation.

Mnemonic in note:

- APIE.

### Overriding vs. Overloading

#### Overriding

- Happens at runtime.
- Uses the same parameters/signature.
- Takes a different route through child-class implementation.
- Can be associated conceptually with extending a class/object.
- The child class can replace parent behavior.

#### Overloading

- Happens at compile time.
- Uses different parameters.
- Applies to methods and function calls.
- Multiple methods can share a name but differ in parameters.

### Functional Programming Compared to OOP

- Functional programming is slightly different.
- It may be better for universal multipurpose code.
- OOP can get messy when data transformation is involved.

### Abstraction

Abstraction means:

- Exposing only necessary details.
- Decoupling the user from background implementation.
- Not needing to care about underlying implementation where the method/function is called.

### Polymorphism

Polymorphism means:

- The system can determine what functions run while the program is running.
- A method can be called on a class through a pointer/reference to the parent object.
- Example idea: create an enemy as a vampire, but when `talk` is called, the vampire’s version runs.
- Runtime behavior looks at the pointer/reference.
- If overridden, the child class method is called.

### Inheritance

Inheritance includes:

- Subclass.
- Extended class.
- Child class.
- Base class.
- Parent class.
- Superclass.

Override methods:

- Method signature, name, and parameters are the same.

Overload variables/methods:

- Two or more methods have the same name but different parameters.

### Encapsulation

Encapsulation means:

- Restricting access to certain aspects of a class.
- Preventing internal object details from interfering with parent class needs.
- Supporting getters and setters.
- Using interfaces, private variables, getters, and setters.
- Encapsulating properties within the object so they can be abstracted away.

### Digestible Interpretation

This section belongs in:

- `Computer Science/Object Oriented Programming.md`
- `Programming Concepts/OOP vs Functional Programming.md`
- `Interview Prep/OOP Basics.md`

---
