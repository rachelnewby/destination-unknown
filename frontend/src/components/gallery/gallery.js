import React, { useState } from "react";
import Image from "../image/image";

const Gallery = ({ goatData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageData = [];

  goatData.included.forEach((element) => {
    if (element.type === "photo") {
      imageData.push({
        photo: element.attributes.image.medium,
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
    <div id="image-gallery">
      <h1>Gallery</h1>
      <div>
        <button onClick={goToPreviousImage}>{"<"}</button>
        <Image imageData={imageData[currentIndex]} />
        <button onClick={goToNextImage}>{">"}</button>
      </div>
    </div>
  );
};

export default Gallery;
