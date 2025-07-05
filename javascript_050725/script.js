// ========================================
// JAVASCRIPT LEARNING - 70 LINES OF CODE
// ========================================

// Variables with var, let, const---------------------------
var name1 = "harsh";
console.log(name1);
var name1 = "aman";  //// var can be redeclared
console.log(name1);

let name2 = "anjali";
console.log(name2);
// let name2 = "dev";  //// error: let cannot be redeclared
name2 = "adit";      //// let can be reassigned
console.log(name2);

const name3 = "pranshu";
console.log(name3);
// const name3 = "shreyas";  //// error: const cannot be redeclared
// name3 = "ayush";          //// error: const cannot be reassigned

// Objects and Object Destructuring---------------------------
const person = {
    name: "harsh",
    age: 20,
    city: "mumbai"
};
console.log(person.name);
console.log(person["age"]);

// Object destructuring
const { name, age, city } = person;
console.log(name, age, city);

// Arrays and Array Methods---------------------------
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

// Array methods
fruits.push("grape");  //// add to end
console.log(fruits);

fruits.pop();          //// remove from end
console.log(fruits);

fruits.unshift("mango");  //// add to beginning
console.log(fruits);

fruits.shift();           //// remove from beginning
console.log(fruits);

// Array methods with functions---------------------------
const numbers = [1, 2, 3, 4, 5];

// map method - transforms each element
const doubled = numbers.map(num => num * 2);
console.log(doubled);  //// [2, 4, 6, 8, 10]

// filter method - keeps elements that pass test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  //// [2, 4]

// reduce method - combines all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  //// 15

// find method - finds first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  //// 2

// Functions with different syntax---------------------------
// Regular function
function greet(name) {
    return "Hello " + name;
}
console.log(greet("harsh"));

// Arrow function
const greetArrow = (name) => {
    return "Hi " + name;
};
console.log(greetArrow("aman"));

// Arrow function with implicit return
const greetShort = name => "Hey " + name;
console.log(greetShort("anjali"));

// Function with default parameters
function welcome(name = "guest", age = 18) {
    return `Welcome ${name}, you are ${age} years old`;
}
console.log(welcome("harsh", 20));
console.log(welcome());  //// uses default values

// Template literals---------------------------
const firstName = "harsh";
const lastName = "sharma";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const message = `Hello ${firstName}!
You are learning JavaScript.
Keep it up!`;
console.log(message);

// Spread operator---------------------------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  //// [1, 2, 3, 4, 5, 6]

const person1 = { name: "harsh", age: 20 };
const person2 = { ...person1, city: "mumbai" };
console.log(person2);  //// { name: "harsh", age: 20, city: "mumbai" }

// Rest parameters---------------------------
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  //// 15

// Classes---------------------------
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
}

const student1 = new Student("harsh", 20);
console.log(student1.introduce());

// setTimeout and setInterval---------------------------
setTimeout(() => {
    console.log("This will print after 1 second");
}, 1000);

let count = 0;
const interval = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count >= 3) {
        clearInterval(interval);
        console.log("Interval stopped");
    }
}, 1000);

// DOM manipulation---------------------------
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loaded!");
    
    // Create a simple element
    const div = document.createElement('div');
    div.textContent = 'Hello from JavaScript!';
    div.style.color = 'blue';
    div.style.fontSize = '20px';
    document.body.appendChild(div);
    
    // Add click event
    div.addEventListener('click', () => {
        console.log('Div was clicked!');
        div.style.backgroundColor = 'yellow';
    });
});

// Error handling with try-catch---------------------------
try {
    const result = 10 / 0;
    console.log(result);  //// Infinity
} catch (error) {
    console.error('Error:', error);
}

try {
    const undefinedVar = undefined;
    console.log(undefinedVar.property);  //// This will throw error
} catch (error) {
    console.error('Caught error:', error.message);
}

// Local storage---------------------------
localStorage.setItem('user', 'harsh');
const user = localStorage.getItem('user');
console.log('User from storage:', user);

// JSON parsing and stringifying---------------------------
const data = {
    name: "harsh",
    hobbies: ["coding", "reading", "music"]
};

const jsonString = JSON.stringify(data);
console.log('JSON string:', jsonString);

const parsedData = JSON.parse(jsonString);
console.log('Parsed data:', parsedData);

console.log("🎉 JavaScript learning completed!");
console.log("📚 Concepts covered: Variables, Objects, Arrays, Functions, Classes, DOM, Storage");
