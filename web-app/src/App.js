/* eslint linebreak-style: ["error", "windows"] */
import './App.css';
import './components/imageupload.css';
import React, {Component} from 'react';

/**
 * @return
 */

class App extends Component {
  // Sets initial state of image to null
  state = {
    selectedImage: null,
    imagePreview: '',
  };

  // Handles uploader
  imageHandler = (event, luffy) => {
    console.log(event.target.files[0]);
    this.setState({

      // This sets the state of selectedImage to image
      selectedImage: event.target.files[0],
      imagePreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
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
        <div>
          <button>This is a button</button>
          <input id="upload" type="file" onChange={this.imageHandler}/>
        </div>
        <img id="img" src={this.state.imagePreview} height="500"
          width="500 "/>
      </div>
    );
  }
}

export default App;
