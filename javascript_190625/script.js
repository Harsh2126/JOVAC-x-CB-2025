// ========================================
// JAVASCRIPT ADVANCED TOPICS - 190625
// ========================================

// Objects and Object Methods---------------------------
const person = {
    name: "harsh",
    age: 20,
    city: "mumbai",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log("Object properties:");
console.log(person.name);  //// harsh
console.log(person["age"]);  //// 20
console.log(person.greet());  //// Hello, I'm harsh

// Object.keys() - returns array of property names
const keys = Object.keys(person);
console.log("Object keys:", keys);  //// ["name", "age", "city", "greet"]

// Object.values() - returns array of property values
const values = Object.values(person);
console.log("Object values:", values);

// Object.entries() - returns array of [key, value] pairs
const entries = Object.entries(person);
console.log("Object entries:", entries);

// Object.assign() - copies properties from one object to another
const newPerson = Object.assign({}, person, { age: 21, country: "India" });
console.log("New person:", newPerson);

// Arrays and Array Methods---------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach() - executes function for each element
console.log("forEach example:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map() - creates new array with transformed elements
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);  //// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter() - creates new array with elements that pass test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);  //// [2, 4, 6, 8, 10]

// reduce() - reduces array to single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);  //// 55

// find() - finds first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);  //// 2

// some() - checks if at least one element passes test
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even numbers:", hasEven);  //// true

// every() - checks if all elements pass test
const allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive);  //// true

// String Methods---------------------------
const text = "  Hello World JavaScript  ";

console.log("Original text:", text);
console.log("Length:", text.length);  //// 25
console.log("Uppercase:", text.toUpperCase());  //// "  HELLO WORLD JAVASCRIPT  "
console.log("Lowercase:", text.toLowerCase());  //// "  hello world javascript  "
console.log("Trimmed:", text.trim());  //// "Hello World JavaScript"
console.log("Substring (0,5):", text.substring(0, 5));  //// "  He"
console.log("Slice (2,7):", text.slice(2, 7));  //// "Hello"
console.log("Replace 'World' with 'JavaScript':", text.replace("World", "JavaScript"));
console.log("Split by space:", text.split(" "));  //// ["", "", "Hello", "World", "JavaScript", "", ""]
console.log("Includes 'Hello':", text.includes("Hello"));  //// true
console.log("Starts with '  H':", text.startsWith("  H"));  //// true
console.log("Ends with '  ':", text.endsWith("  "));  //// true

// Math Object---------------------------
console.log("Math.PI:", Math.PI);  //// 3.141592653589793
console.log("Math.E:", Math.E);  //// 2.718281828459045
console.log("Math.abs(-5):", Math.abs(-5));  //// 5
console.log("Math.ceil(4.3):", Math.ceil(4.3));  //// 5
console.log("Math.floor(4.7):", Math.floor(4.7));  //// 4
console.log("Math.round(4.5):", Math.round(4.5));  //// 5
console.log("Math.max(1,2,3,4,5):", Math.max(1,2,3,4,5));  //// 5
console.log("Math.min(1,2,3,4,5):", Math.min(1,2,3,4,5));  //// 1
console.log("Math.random():", Math.random());  //// random number between 0 and 1
console.log("Math.pow(2,3):", Math.pow(2,3));  //// 8
console.log("Math.sqrt(16):", Math.sqrt(16));  //// 4

// Date Object---------------------------
const now = new Date();
console.log("Current date:", now);
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0-6):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Time in milliseconds:", now.getTime());
console.log("Date string:", now.toDateString());
console.log("Time string:", now.toTimeString());
console.log("ISO string:", now.toISOString());

// Creating specific date
const specificDate = new Date(2024, 0, 15, 10, 30, 0);  //// January 15, 2024, 10:30:00
console.log("Specific date:", specificDate);

// JSON Methods---------------------------
const data = {
    name: "harsh",
    age: 20,
    hobbies: ["coding", "reading", "music"],
    address: {
        city: "mumbai",
        country: "india"
    }
};

// Convert object to JSON string
const jsonString = JSON.stringify(data);
console.log("JSON string:", jsonString);

// Convert JSON string back to object
const parsedData = JSON.parse(jsonString);
console.log("Parsed data:", parsedData);

// Local Storage---------------------------
localStorage.setItem("user", "harsh");
localStorage.setItem("age", "20");
localStorage.setItem("city", "mumbai");

console.log("User from localStorage:", localStorage.getItem("user"));
console.log("Age from localStorage:", localStorage.getItem("age"));
console.log("City from localStorage:", localStorage.getItem("city"));

// Store object in localStorage
localStorage.setItem("userData", JSON.stringify(data));
const userData = JSON.parse(localStorage.getItem("userData"));
console.log("User data from localStorage:", userData);

// Remove item from localStorage
localStorage.removeItem("age");
console.log("Age after removal:", localStorage.getItem("age"));  //// null

// Session Storage---------------------------
sessionStorage.setItem("sessionUser", "harsh");
sessionStorage.setItem("sessionData", JSON.stringify({ loginTime: new Date() }));

console.log("Session user:", sessionStorage.getItem("sessionUser"));
console.log("Session data:", JSON.parse(sessionStorage.getItem("sessionData")));

// Cookies---------------------------
// Set cookie
document.cookie = "username=harsh; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "theme=dark; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

console.log("All cookies:", document.cookie);

// Function to get cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for(let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if(cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

console.log("Username cookie:", getCookie("username"));
console.log("Theme cookie:", getCookie("theme"));

// Error Handling---------------------------
console.log("Error handling examples:");

// Try-catch with custom error
try {
    const result = 10 / 0;
    if(!isFinite(result)) {
        throw new Error("Division by zero results in infinity");
    }
    console.log("Result:", result);
} catch(error) {
    console.error("Caught error:", error.message);
}

// Try-catch with JSON parsing
try {
    const invalidJSON = "{ name: harsh }";  //// Invalid JSON
    const parsed = JSON.parse(invalidJSON);
    console.log("Parsed:", parsed);
} catch(error) {
    console.error("JSON parsing error:", error.message);
}

// Try-catch with undefined property
try {
    const obj = {};
    console.log(obj.nonExistentProperty.someMethod());  //// This will throw error
} catch(error) {
    console.error("Property access error:", error.message);
}

// Global functions for button testing---------------------------
function testObjects() {
    console.log("=== Testing Objects ===");
    console.log("Person object:", person);
    console.log("Object keys:", Object.keys(person));
    console.log("Object values:", Object.values(person));
}

function testArrays() {
    console.log("=== Testing Arrays ===");
    console.log("Numbers array:", numbers);
    console.log("Doubled:", numbers.map(n => n * 2));
    console.log("Even numbers:", numbers.filter(n => n % 2 === 0));
    console.log("Sum:", numbers.reduce((sum, n) => sum + n, 0));
}

function testStrings() {
    console.log("=== Testing Strings ===");
    console.log("Original:", text);
    console.log("Uppercase:", text.toUpperCase());
    console.log("Trimmed:", text.trim());
    console.log("Split:", text.split(" "));
}

function testMath() {
    console.log("=== Testing Math ===");
    console.log("Random number:", Math.random());
    console.log("Max of 1,5,3,9,2:", Math.max(1,5,3,9,2));
    console.log("Square root of 25:", Math.sqrt(25));
    console.log("Power 2^8:", Math.pow(2,8));
}

function testDate() {
    console.log("=== Testing Date ===");
    const now = new Date();
    console.log("Current date:", now.toDateString());
    console.log("Current time:", now.toTimeString());
    console.log("ISO format:", now.toISOString());
}

function testStorage() {
    console.log("=== Testing Storage ===");
    console.log("localStorage user:", localStorage.getItem("user"));
    console.log("sessionStorage user:", sessionStorage.getItem("sessionUser"));
    console.log("Cookies:", document.cookie);
}

function testErrorHandling() {
    console.log("=== Testing Error Handling ===");
    try {
        const result = 10 / 0;
        console.log("Result:", result);
    } catch(error) {
        console.error("Error:", error.message);
    }
}

console.log("🚀 Advanced JavaScript topics loaded!");
console.log("📚 Topics: Objects, Arrays, Strings, Math, Date, JSON, Storage, Error Handling");
