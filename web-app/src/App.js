import React, { useState } from "react";

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
    <div>
      <AddImage onAddImage={addImageHandler} />
      <ImagesList images={imagesList} />
    </div>
  );
}

export default App;
