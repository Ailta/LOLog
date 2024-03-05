import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	function OnClick() {
        setMessage(getMessage());
        // uložit input text do databáze      
    }
	
	return (
		<div className="App">
			<header className="App-header">
				<button OnClick={OnClick}>You got mail.</button>
				<p>{message}</p>
			</header>
		</div>
	);
}

function getMessage() {
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		// Fetch data from the server when the component mounts
		fetch('/api/hello')
		.then((response) => response.json())
		.then((data) => setMessage(data.message))
		.catch((error) => console.error('Error fetching data:', error));
	}, []);
	
	return message;
}

export default App;