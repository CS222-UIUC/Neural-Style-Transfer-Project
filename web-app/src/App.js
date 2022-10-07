/* eslint linebreak-style: ["error", "windows"] */
import './App.css';
import './components/imageupload.css';
import React from 'react';
import ImageUploader from './components/imageupload';

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
        <ImageUploader/>
      </div>
    </div>
  );
}

export default App;
