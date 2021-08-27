import "./App.css";
import Face from "./components/Face";
import { range } from "d3";

const arr = range(3 * 7);

function App() {
  const width = 200;
  const height = 200;

  return (
    <div className="container">
      {arr.map(() => (
        <Face
          width={width}
          height={height}
          centerX={width / 2}
          centerY={height / 2}
          strokeWidth="10"
          eyeOffsetX={30 + Math.random() * 10}
          eyeOffsetY={30 + Math.random() * 10}
          eyeRadius={10 + Math.random() * 10}
          mouthRadius={50 + Math.random() * 10}
        />
      ))}
    </div>
  );
}

export default App;
