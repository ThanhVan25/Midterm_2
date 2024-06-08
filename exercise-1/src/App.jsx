import React, { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = useState(true)

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining()=true
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
  }

  return (
    <main>
      <h1>TODO</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;