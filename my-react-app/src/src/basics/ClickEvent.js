import React, { useState } from 'react';
import './ClickEvent.css';
function ClickEvent() {
  const [message, setMessage] = useState('Welcome!');
  const handleClick = () => setMessage('Button was clicked!');
  return (
    <div className="click-container">
      <h2 className="message">{message}</h2>
      <button className="click-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
export default ClickEvent;