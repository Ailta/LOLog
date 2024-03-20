import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [logedIn, setLogedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	//useEffect(() => {
	//	// Fetch data from the server when the component mounts
	//	fetch('/api/hello')
	//	.then((response) => response.json())
	//	.then((data) => setMessage(data.message))
	//	.catch((error) => console.error('Error fetching data:', error));
	//}, []);
	
	function logIn(){
		const text = document.getElementById('text');
		const usernameForm = document.getElementById('username').value;
		const passwordForm = document.getElementById('password').value;
	
		let data = { 'username': usernameForm, 'password': passwordForm};
	
		fetch('/logIn', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({data})
		})
		.then((response) => response.json())
		.then((data) => {
			if (data.success){
				setLogedIn(true);
				console.log('success');
				setUsername(usernameForm);
				setPassword(passwordForm);
			}
			else{
				console.log('failed');
			}
		})
		.catch((error) => console.error('Error fetching data:', error));
	}
	
	function writeUsrPass(){
		console.log(username, password);
	}
	
	let page;
	if(!logedIn){
		page = <LogIn onClick={logIn}/>;
	} else{
		page = <ToDo onClick={writeUsrPass}/>;
	}
	return page;
}

function LogIn({ onClick }){
	return (
		<div className="App">
			<header className="App-header">
				<div id="logInForm" style={{backgroundColor: '#202329', marginRight: '0px', paddingRight: '15px', paddingLeft: '15px', paddingBottom: '10px'}}>
					<p style={{marginTop: '0px', marginBottom: '0px'}} id="text">LogIn</p>
					<input type="text" id="username" name="username" placeholder="Username" required />
					<br/>
					<input type="password" id="password" name="password" placeholder="Password" required />
					<br/>
					<button onClick={onClick}>Submit</button>
				</div>
			</header>
		</div>
	);
}

function ToDo({ onClick }){
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<p>TaDá</p>
					<button onClick={onClick}>WriteIntoConsole</button>
				</div>
			</header>
		</div>
	);
}

export default App;