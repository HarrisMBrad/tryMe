import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const MainApp = () => {
  // Using React state to manage background color
  const [backgroundColor, setBackgroundColor] = useState('white'); 

  // Colors array similar to the original Android code
  const colors = ['#A9A9A9', '#00FFFF', '#808080', '#FF0000', '#0000FF', '#000000', '#D3D3D3', '#FF00FF', '#A9A9A9'];

  // Function to change the background color to a random value
  const changeColor = () => {
    const colorArrayLength = colors.length;
    const randomNum = Math.floor(Math.random() * colorArrayLength);
    setBackgroundColor(colors[randomNum]); // Set the new background color

    console.log('Random color index: ', randomNum); // Logging for debugging purposes
  };

  return (
    <div 
      style={{ 
        backgroundColor, // Apply the dynamic background color
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
      {/* Button to trigger color change */}
      <button 
        onClick={changeColor} 
        style={{ padding: '10px 20px', fontSize: '16px' }}>
        Try Me!
      </button>
    </div>
  );
};

export default MainApp;
