import React from "react";

const Eyes = ({ eyeOffsetY, eyeOffsetX, eyeRadius }) => {
  return (
    <>
      <circle r={eyeRadius} cx={-eyeOffsetX} cy={-eyeOffsetY} />
      <circle r={eyeRadius} cx={eyeOffsetX} cy={-eyeOffsetY} />
    </>
  );
};

export default Eyes;
