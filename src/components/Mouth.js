import { arc } from "d3-shape";

const Mouth = ({ mouthRadius }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + 10)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return <path d={mouthArc()} />;
};

export default Mouth;