// Example Node.js script

// 1. Print a message to the console
console.log('Hello from Node.js!');

// 2. Read and display the contents of a file using Node.js
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'app.js'); // Reading this file itself as an example
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('\n--- Contents of app.js ---');
    console.log(data.substring(0, 200) + (data.length > 200 ? '... (truncated)' : ''));
  }
});

// 3. Create a simple API that returns JSON
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, this is a JSON response!', time: new Date() }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a Node.js server!');
  }
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
  console.log('Try http://localhost:3000/json for a JSON response.');
});

// 4. Use npm to install and use an external package
// To use this, run: npm install axios
try {
  const axios = require('axios');
  axios.get('https://api.github.com').then(response => {
    console.log('\n--- Example of using axios (npm package) ---');
    console.log('GitHub API status:', response.status);
  }).catch(err => {
    console.error('Axios error:', err.message);
  });
} catch (e) {
  console.log("\nTo see the axios example, run 'npm install axios' in this folder.");
}

// 5. Handle user input from the command line
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('\nWhat is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
}); 