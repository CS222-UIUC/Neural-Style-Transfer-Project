/* eslint linebreak-style: ["error", "windows"] */
import './imageupload.css';
import React from 'react';

function uploadFile() {
  document.getElementById('image').click();
  return 10;
}

const ImageUploader = () => {
  return (
    <>
      <div className="imageUpload">
        <button onClick={uploadFile}>
          Upload Image
        </button>
        <input id="image" type="file" style={{display: 'none'}}/>
      </div>
    </>
  );
};

export default ImageUploader;
