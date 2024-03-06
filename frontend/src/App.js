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
        <p>{message}</p>
		<MyButton count={count} onClick={clicked}/>
		<MyButton count={count} onClick={handleClick}/>
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