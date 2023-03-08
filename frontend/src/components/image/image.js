import React from "react";
import './image.css'

const Image = ({ imageData }) => {
  return (
    <div className="image-wrapper">
        <img src={imageData.photo} alt="Destination" height='65%' width='65%'/>
    </div>
  );
};

export default Image;
