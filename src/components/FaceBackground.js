import React from "react";

const FaceBackground = ({ faceRadius, strokeWidth }) => {
  return (
    <circle
      r={faceRadius}
      fill="yellow"
      stroke-width={strokeWidth}
      stroke="black"
    />
  );
};

export default FaceBackground;
