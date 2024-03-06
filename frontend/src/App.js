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
			<p style={{marginTop: '0px', marginBottom: '0px'}}>LogIn</p>
			<form action="/logIn" method="post">
				<input type="text" id="username" name="username" placeholder="Username" required />
				<br/>
				<input type="password" id="password" name="password" placeholder="Password" required />
				<br/>
				<input type="submit" value="Submit" />
			</form>
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