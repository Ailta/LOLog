const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const jsondb = require('simple-json-db');
const db = new jsondb('../data/users.json');

app.use(express.urlencoded());
app.use(express.json());
// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// A simple endpoint that responds with 'Hello'
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from the server!' });
});

app.get('/api/helloo', (req, res) => {
	res.json({ message: 'Hello World!' });
});

// Handle requests to the root URL
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle form submission
app.post('/logIn', (req, res) => {
	const dataUsername = req.body.data.username;
	const dataPassword = req.body.data.password;

	// Do something with the form data (e.g., save to a database)
	console.log('Username:', dataUsername);
	console.log('Password:', dataPassword);
	
	for (let i = 0; i < db.get('next_id'); i++){
		let user = db.get(i);
		if (user.name == dataUsername && user.password == dataPassword){
			res.json({ 'success': true });
		}
		console.log(user);
	}

	// Send a response
	res.json({ 'success': false });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});