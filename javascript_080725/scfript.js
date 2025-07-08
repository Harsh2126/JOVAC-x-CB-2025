// =============================
// CLASSES, INHERITANCE & OOP
// =============================

// Base class: Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hello, my name is ${this.name}.`;
    }
    getAge() {
      return this.age;
    }
    static species() {
      return 'Homo sapiens';
    }
  }
  
  // Subclass: Student extends Person
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); // Call parent constructor
      this.studentId = studentId;
    }
    // Override greet method
    greet() {
      return `Hi, I'm ${this.name}, and my student ID is ${this.studentId}.`;
    }
    study(subject) {
      return `${this.name} is studying ${subject}.`;
    }
    static school() {
      return 'Code Academy';
    }
  }
  
  // Create instances
  const alice = new Person('Alice', 30);
  const bob = new Student('Bob', 20, 'S123');
  
  // Call methods and log outputs
  console.log(alice.greet()); // Output: Hello, my name is Alice.
  console.log(alice.getAge()); // Output: 30
  console.log(Person.species()); // Output: Homo sapiens
  
  console.log(bob.greet()); // Output: Hi, I'm Bob, and my student ID is S123.
  console.log(bob.getAge()); // Output: 20
  console.log(bob.study('JavaScript')); // Output: Bob is studying JavaScript.
  console.log(Student.school()); // Output: Code Academy
  
  // Check inheritance
  console.log(bob instanceof Student); // Output: true
  console.log(bob instanceof Person); // Output: true
  
  // Array of people
  const people = [alice, bob, new Student('Charlie', 22, 'S456')];
  
  // Loop through and call greet
  people.forEach(person => {
    console.log(person.greet());
    // Output: Each person's greet message
  });
  
  // Destructuring and spread
  const [first, ...rest] = people;
  console.log(first.name); // Output: Alice
  console.log(rest.map(p => p.name)); // Output: [ 'Bob', 'Charlie' ]
  
  // Object property shorthand and computed property
  const subject = 'Math';
  const scores = {
    [alice.name]: 95,
    [bob.name]: 88,
    subject,
  };
  console.log(scores); // Output: { Alice: 95, Bob: 88, subject: 'Math' }
  
  // Get all student IDs
  const studentIds = people
    .filter(p => p instanceof Student)
    .map(s => s.studentId);
  console.log(studentIds); // Output: [ 'S123', 'S456' ]
  
  /*
  Expected Output:
  Hello, my name is Alice.
  30
  Homo sapiens
  Hi, I'm Bob, and my student ID is S123.
  20
  Bob is studying JavaScript.
  Code Academy
  true
  true
  Hi, I'm Alice, and my student ID is undefined. (for Person, fallback to base greet)
  Hi, I'm Bob, and my student ID is S123.
  Hi, I'm Charlie, and my student ID is S456.
  Alice
  [ 'Bob', 'Charlie' ]
  { Alice: 95, Bob: 88, subject: 'Math' }
  [ 'S123', 'S456' ]
  */
  