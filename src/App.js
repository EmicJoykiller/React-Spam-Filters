import React, { useState } from 'react';
import './App.css';

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

function App() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = () => {
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }

    const spamResult = isSpam(message)
      ? "Oh no! This looks like a spam message."
      : "This message does not seem to contain any spam.";
    setResult(spamResult);
    setMessage('');
  };

  return (
    <div className="App">
      <header className="main-text">
        <h1 className="title">Is this Spam?</h1>
        <p className="description">
          Enter a phrase to check if it would be marked as spam or not.
        </p>
      </header>

      <main className="main-container">
        <label className="message-label" htmlFor="message-input">Message:</label>
        <textarea
          placeholder="Enter message here"
          value={message}
          onChange={handleChange}
          name="message"
          id="message-input"
          rows="10"
        />
        <button className="btn" onClick={handleSubmit}>Check message</button>
        {result && <p id="result">{result}</p>}
      </main>
    </div>
  );
}

export default App;
