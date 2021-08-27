import FaceContainer from "./FaceContainer";
import FaceBackground from "./FaceBackground";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
}) => {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <FaceBackground
        faceRadius={height / 2 - strokeWidth / 2}
        strokeWidth={6 + Math.random() * 10}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} />
    </FaceContainer>
  );
};

export default Face;
