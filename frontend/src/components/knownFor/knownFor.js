import React, { useState } from "react";

const KnownFor = ({ goatData }) => {
  // console.log(goatData.included[2]);
  const emojiData = [];

  goatData.included.forEach((element) => {
    if (element.type === "known_for") {
      emojiData.push({
        description: element.attributes.name,
        emoji: element.attributes.icon + "-48.png",
      });
    }
  });

  emojiData.forEach((element) => {
    console.log(element);
  });

  // while type is === 'known_for
  // get name and icon url
  // each icon url need "-48.png" added to the end
  // add to array of objects
  // iterate over and pass values into span

  return (
    <div>
      <h3 id="knownfor-title">KNOWN FOR</h3>
      <div id="emoji-div"></div>
    </div>
  );
};

export default KnownFor;
