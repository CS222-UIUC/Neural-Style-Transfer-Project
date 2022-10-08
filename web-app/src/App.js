import React, { useState } from "react";

import "@testing-library/jest-dom";

import AddImage from "./components/Users/AddImage";
import ImagesList from "./components/Users/ImagesList";

function App() {
  const [imagesList, setImagesList] = useState([]);

  const addImageHandler = (newLabel, newImg) => {
    setImagesList((prevImagesList) => {
      return [
        ...prevImagesList,
        { label: newLabel, img: newImg, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div data-testid="AddImage">
      <AddImage onAddImage={addImageHandler} />
      <ImagesList images={imagesList} />
    </div>
  );
}

export default App;
