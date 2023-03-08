import React from "react";
import ReactLoading from "react-loading";

const LoadingBar = ({ type, color }) => (
  <div className="loadingBar">
    <ReactLoading type={type} color={color} height={200} width={250} />
  </div>
);

export default LoadingBar;
