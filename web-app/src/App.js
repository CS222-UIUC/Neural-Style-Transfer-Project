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
  };

  // Handles uploader
  imageHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({

      // This sets the state of the image to the image the uder uploaded
      selectedImage: event.target.files[0],
    });
    console.log('This Works');
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
      </div>
    );
  }
}

export default App;
