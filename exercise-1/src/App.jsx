import React, { useState } from "react";

function App() {
  const [isRaining, setIsRaining] = useState(true);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getText() {
    return isRaining ? "Rain Time" : "Sunny Time";
  }

  function getBackground() {
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackground()}>
      <h1>{getText()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
