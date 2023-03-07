import React, { useState } from "react";

const Image = ({ goatData }) => {
    const imageData =[];

    goatData.included.forEach((element) => {
        if (element.type === "photo") {
          imageData.push({
            photo: element.attributes.image.medium,
          });
        }
    });
    imageData.shift();
    imageData.forEach((element) => {
        console.log(element);
    });
  return (
    <div>
      {imageData.map((image, id) => (
        <div key={id}>
          <img src={image.photo} alt="Destination" />
          <div id="image-div" style={{ border: "1px solid white" }}></div>
        </div>
      ))}
    </div>
  );
};

export default Image;