import React, { useState } from "react";

const KnownFor = ({ goatData }) => {
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

  return (
    <div>
      <h3 id="knownfor-title">KNOWN FOR</h3>
      <div id="emoji-div">
        {emojiData.map((element) => (
          <span>
            <img src={element.emoji} alt={element.description} />
            <p id={element.description}>{element.description}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default KnownFor;
