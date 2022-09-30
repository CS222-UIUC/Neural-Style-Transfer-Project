/* eslint linebreak-style: ["error", "windows"] */
// import logo from './logo.svg';
import './App.css';
import React from 'react';


/**
 * @return
 */
function App() {
  return (
    <div className="App">
      <span className="header">
        Neural Style Transfer Website
      </span>
      <div className = "components">
        <p>
          This website allows the user to upload a photo which is then styled
          using a machine learning model
        </p>
      </div>
    </div>
  );
}

export default App;
