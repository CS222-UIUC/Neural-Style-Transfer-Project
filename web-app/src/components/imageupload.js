/* eslint linebreak-style: ["error", "windows"] */
import './imageupload.css';
import React, {Component} from 'react';

class ImageUploader extends Component {
  // Handles when button is clicked
  buttonHandler = (event) => {
    window.alert(event);
    document.getElementById('practice').innerHTML = 100;
  };

  uploadFile() {
    document.getElementById('button').click();
  }


  render() {
    return (
      <>
        <div className="imageUpload">
          <button id="button" onClick={uploadFile}>
            Upload Image
            <p id="practice"></p>
          </button>
          <input id="image" type="file" onChange={buttonHandler}></input>
        </div>
      </>
    );
  }
};

export default ImageUploader;
