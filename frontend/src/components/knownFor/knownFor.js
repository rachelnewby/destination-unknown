import React from "react";
import "./knownFor.css";

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

  return (
    <div>
      <h3 id="knownfor-title">KNOWN FOR</h3>
      <div id="emoji-div">
        {emojiData.length > 0 ? (
          emojiData.map((element) => (
            <span className="emoji-block">
              <img
                className="emoji-image"
                src={element.emoji}
                alt={element.description}
              />
              <p id={element.description}>{element.description}</p>
            </span>
          ))
        ) : (
          <p className="empty-knownfor">Not known for anything</p>
        )}
      </div>
    </div>
  );
};

export default KnownFor;
