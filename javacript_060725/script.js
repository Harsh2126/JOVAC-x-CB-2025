// ========================================
// JAVASCRIPT ADVANCED CONCEPTS - 060725
// ========================================

// Promises and Async/Await---------------------------
console.log("=== PROMISES AND ASYNC/AWAIT ===");

// Creating a simple promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum > 0.5) {
            resolve(`Success! Number: ${randomNum}`);
        } else {
            reject(`Failed! Number: ${randomNum}`);
        }
    }, 1000);
});

// Using .then() and .catch()
myPromise
    .then(result => console.log("Promise resolved:", result))  //// Promise resolved: Success! Number: 0.7234...
    .catch(error => console.log("Promise rejected:", error));  //// Promise rejected: Failed! Number: 0.2341...

// Async function with await
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        console.log("User data:", user.name, user.email);  //// User data: Leanne Graham Sincere@april.biz
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Call the async function
fetchUserData();

// Modules and Import/Export---------------------------


// Simulating module exports
const mathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const stringUtils = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: (str) => str.split('').reverse().join(''),
    countWords: (str) => str.split(' ').length
};

console.log("Math utils:", mathUtils.add(5, 3));  //// Math utils: 8
console.log("String utils:", stringUtils.capitalize("hello world"));  //// String utils: Hello world

// Generators---------------------------



function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const gen = numberGenerator();
console.log("Generator values:");
console.log(gen.next().value);  //// 1
console.log(gen.next().value);  //// 2
console.log(gen.next().value);  //// 3

// Symbol and Iterators---------------------------


const mySymbol = Symbol('description');
const obj = {
    [mySymbol]: 'This is a symbol property',
    name: 'harsh',
    age: 20
};

console.log("Symbol property:", obj[mySymbol]);  //// Symbol property: This is a symbol property
console.log("Symbols in object:", Object.getOwnPropertySymbols(obj));  //// Symbols in object: [Symbol(description)]

// Custom iterator
const customArray = {
    data: ['apple', 'banana', 'orange'],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

console.log("Custom iterator:");
for (let item of customArray) {
    console.log(item);  //// apple, banana, orange
}

// Proxy and Reflect---------------------------


const target = { name: 'harsh', age: 20 };
const handler = {
    get(target, prop) {
        console.log(`Getting property: ${prop}`);  //// Getting property: name
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Setting property: ${prop} = ${value}`);  //// Setting property: age = 21
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);
console.log("Proxy name:", proxy.name);  //// Proxy name: harsh
proxy.age = 21;

// WeakMap and WeakSet--------------------------

const weakMap = new WeakMap();
const weakSet = new WeakSet();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakMap.set(obj1, 'data for obj1');
weakSet.add(obj1);
weakSet.add(obj2);

console.log("WeakMap has obj1:", weakMap.has(obj1));  //// WeakMap has obj1: true
console.log("WeakSet has obj1:", weakSet.has(obj1));  //// WeakSet has obj1: true

// Map and Set---------------------------


const map = new Map();
map.set('name', 'harsh');
map.set('age', 20);
map.set('city', 'mumbai');

console.log("Map size:", map.size);  //// Map size: 3
console.log("Map has 'name':", map.has('name'));  //// Map has 'name': true
console.log("Map get 'name':", map.get('name'));  //// Map get 'name': harsh

const set = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("Set values:", [...set]);  //// Set values: [1, 2, 3, 4, 5]
console.log("Set size:", set.size);  //// Set size: 5

// Template Literals and Tagged Templates---------------------------



const name = 'harsh';
const age = 20;
const city = 'mumbai';

const message = `Hello, I'm ${name} and I'm ${age} years old from ${city}.`;
console.log(message);  //// Hello, I'm harsh and I'm 20 years old from mumbai.

// Tagged template
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<span class=\"highlight\">${values[i]}</span>` : '');
    }, '');
}

const highlighted = highlight`Hello ${name}, you are ${age} years old!`;
console.log("Tagged template:", highlighted);  //// Tagged template: Hello <span class="highlight">harsh</span>, you are <span class="highlight">20</span> years old!

// Optional Chaining and Nullish Coalescing---------------------------

const user = {
    name: 'harsh',
    address: {
        city: 'mumbai',
        country: 'india'
    }
};

console.log("Safe property access:", user?.address?.city);  //// Safe property access: mumbai
console.log("Non-existent property:", user?.address?.street?.name);  //// Non-existent property: undefined

const value = null;
const defaultValue = 'default';
const result = value ?? defaultValue;
console.log("Nullish coalescing:", result);  //// Nullish coalescing: default

// Array Destructuring and Rest/Spread---------------------------


const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const [first, second, ...rest] = colors;

console.log("First color:", first);  //// First color: red
console.log("Second color:", second);  //// Second color: green
console.log("Rest colors:", rest);  //// Rest colors: ['blue', 'yellow', 'purple']

const newColors = [...colors, 'orange', 'pink'];
console.log("Spread colors:", newColors);  //// Spread colors: ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink']

// Object Destructuring---------------------------

const person = {
    name: 'harsh',
    age: 20,
    city: 'mumbai',
    country: 'india',
    hobbies: ['coding', 'reading']
};

const { name: personName, age: personAge, ...personRest } = person;
console.log("Destructured name:", personName);  //// Destructured name: harsh
console.log("Destructured age:", personAge);  //// Destructured age: 20
console.log("Rest properties:", personRest);  //// Rest properties: {city: 'mumbai', country: 'india', hobbies: ['coding', 'reading']}

// Default parameters and rest parameters---------------------------
function greet(name = 'Guest', age = 18, ...hobbies) {
    console.log(`Hello ${name}, you are ${age} years old`);  //// Hello harsh, you are 20 years old
    if (hobbies.length > 0) {
        console.log("Your hobbies:", hobbies);  //// Your hobbies: ['coding', 'reading', 'music']
    }
}

greet('harsh', 20, 'coding', 'reading', 'music');
greet(); // Uses default values  //// Hello Guest, you are 18 years old

