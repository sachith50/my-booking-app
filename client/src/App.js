import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  // useEffect runs after the component mounts
  useEffect(() => {
    // We will fetch the data from our backend here
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []); // The empty array means this effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Booking App</h1>
        <p>A message from your server: <strong>{message}</strong></p>
      </header>
    </div>
  );
}

export default App;