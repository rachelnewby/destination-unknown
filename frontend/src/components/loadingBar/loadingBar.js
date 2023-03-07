import React from "react";
import ReactLoading from "react-loading";

const LoadingBar = ({ type, color }) => (
  <div className="loadingBar">
    <ReactLoading type={type} color={color} height={667} width={375} />
  </div>
);

export default LoadingBar;
