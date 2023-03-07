import React from "react";

const Image = ({ imageData }) => {
  // console.log("image.js " + imageData.photo);
  return (
    <div id="image-div" style={{ border: "1px solid white" }}>
      <img src={imageData.photo} alt="Destination" />
    </div>
  );
};

export default Image;
