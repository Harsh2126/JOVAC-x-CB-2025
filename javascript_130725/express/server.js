const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello, World!");
});
 

app.post('/', (req, res) => {
  res.send("Hello,  post World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});