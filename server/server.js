const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// A simple endpoint that responds with 'Hello'
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('/api/helloo', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});