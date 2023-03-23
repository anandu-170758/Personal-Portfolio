import React, { useState } from "react";
import "../styles/title.css";

const App = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div className="container">
      <h1 className={isAnimated ? "animated" : ""}>Hello, world!</h1>
      <button onClick={toggleAnimation}>Toggle Animation</button>
    </div>
  );
};

export default App;
