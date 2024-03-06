const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(express.json());
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

// Handle form submission
app.post('/logIn', (req, res) => {
	
	const username = req.body.data.username;
	const password = req.body.data.password;

	// Do something with the form data (e.g., save to a database)
	console.log('Username:', username);
	console.log('Password:', password);

	// Send a response
	res.json({ 'success': true });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});