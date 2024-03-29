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
	function Add() {
		const message = document.getElementById("message").value;
		console.log(message);
	}

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<table>
						<tr>
							<td><input type='text' id='message' name='message' placeholder='Zde zadeje nový úkol'/></td>
							<td><button onClick={Add}>+</button></td>
						</tr>
					</table>
					<button onClick={onClick}>WriteIntoConsole</button>
				</div>
			</header>
		</div>
	);
}

function MyButton() {
	const [count, setCount] = useState(0);
  
	function handleClick() {
	  setCount(count + 1);
	}
  
	return (
	  <button onClick={handleClick}>
		Clicked {count} times
	  </button>
	);
  }

export default App;