import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  function clicked() {
	fetch('/api/helloo')
		.then((response) => response.json())
		.then((data) => setMessage(data.message))
		.catch((error) => console.error('Error fetching data:', error));
  }
  
  function logIn(){
	const text = document.getElementById('text');
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
  
	let data = { 'username': username, 'password': password};
  
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
			text.innerHTML = 'Yaaay.';
		}
	})
	.catch((error) => console.error('Error fetching data:', error));
  }


  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('/api/hello')
      .then((response) => response.json())
	  .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
		<div id="logInForm" style={{backgroundColor: '#202329', marginRight: '0px', paddingRight: '15px', paddingLeft: '15px', paddingBottom: '10px'}}>
			<p style={{marginTop: '0px', marginBottom: '0px'}} id="text">LogIn</p>
			<input type="text" id="username" name="username" placeholder="Username" required />
			<br/>
			<input type="password" id="password" name="password" placeholder="Password" required />
			<br/>
			<button onClick={logIn}>Sumbit</button>
		</div>
      </header>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App;