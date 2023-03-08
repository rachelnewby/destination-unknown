import React, { useState } from "react";
import Image from "../image/image";
import './gallery.css'

const Gallery = ({ goatData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageData = [];

  goatData.included.forEach((element) => {
    if (element.type === "photo") {
      imageData.push({
        photo: element.attributes.image.large
      });
    }
  });

  imageData.shift();

  const goToPreviousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex === imageData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="wrapper">
      <div id="image-container" className="wrapper">
        <Image imageData={imageData[currentIndex]} />
        <div id="button-container">
          <button onClick={goToPreviousImage}>{"<"}</button>
          <button onClick={goToNextImage}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
