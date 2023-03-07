import React from "react";
import Rating from "react-rating";
import "../ratings/ratings.css";

function SafetyRatings({ cityData }) {
  const cityName = cityData.data.attributes.name;
  console.log(cityData.data.attributes.safety);
  const safety = cityData.data.attributes.safety[`${cityName}`].value;
  const subText = cityData.data.attributes.safety[`${cityName}`].subText;
  const text = cityData.data.attributes.safety[`${cityName}`].text;

  return (
    <div className="ratings-div">
      <h3>Safety rating based on local crime and geo-political risk</h3>
      <p>
        The safety rating is {text.toLowerCase()}, you should{" "}
        {subText.toLowerCase()}!
      </p>
      <Rating
        start={0}
        stop={5}
        step={1}
        readonly={true}
        initialRating={safety}
        fullSymbol={
          <img
            src={"/safetyIcon.png"}
            className="safety-full"
            width={40}
            height={40}
            alt=""
            style={{ marginRight: "2px" }}
          />
        }
        emptySymbol={
          <img
            src={"/emptyIcon.png"}
            className="safety-empty"
            width={40}
            height={40}
            alt=""
            style={{ marginRight: "2px" }}
          />
        }
      />
    </div>
  );
}

export default SafetyRatings;
