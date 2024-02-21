import "./RenderPropLab.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <div>
      <MousePosition
        render={({ mousePosition }) => (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant Here you go🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
