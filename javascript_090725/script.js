// --- Set Example ---
const fruits = new Set();
fruits.add('apple');
fruits.add('banana');
fruits.add('orange');
fruits.add('apple'); // Duplicate, won't be added

console.log(fruits); // Output: Set { 'apple', 'banana', 'orange' }
console.log(fruits.has('banana')); // Output: true
console.log(fruits.size); // Output: 3

fruits.delete('banana');
console.log(fruits); // Output: Set { 'apple', 'orange' }

fruits.forEach(fruit => console.log(fruit)); 
// Output: apple
//         orange

// --- Map Example ---
const userAges = new Map();
userAges.set('Alice', 25);
userAges.set('Bob', 30);
userAges.set('Charlie', 28);

console.log(userAges.get('Bob')); // Output: 30
console.log(userAges.has('Alice')); // Output: true
console.log(userAges.size); // Output: 3

userAges.delete('Charlie');
console.log(userAges); // Output: Map { 'Alice' => 25, 'Bob' => 30 }

for (const [name, age] of userAges) {
  console.log(`${name} is ${age} years old.`);
  // Output: Alice is 25 years old.
  //         Bob is 30 years old.
}

// --- Convert Set to Array ---
const fruitArray = Array.from(fruits);
console.log(fruitArray); // Output: [ 'apple', 'orange' ]

// --- Convert Map to Object ---
const userObj = Object.fromEntries(userAges);
console.log(userObj); // Output: { Alice: 25, Bob: 30 }
