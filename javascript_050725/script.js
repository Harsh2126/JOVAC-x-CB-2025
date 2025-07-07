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

