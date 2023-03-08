import React from "react";

const Image = ({ imageData }) => {
  return (
    <div id="image-div">
      <img src={imageData.photo} alt="Destination" />
    </div>
  );
};

export default Image;
