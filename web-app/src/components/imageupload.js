/* eslint linebreak-style: ["error", "windows"] */
import './imageupload.css';
import React from 'react';

const ImageUploader = () => {
  return (
    <>
      <input type="image" style={{display: 'none'}} />
      <button>
          Upload Super Cool Image
      </button>
    </>
  );
};

export default ImageUploader;
