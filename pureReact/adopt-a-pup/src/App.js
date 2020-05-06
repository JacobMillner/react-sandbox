import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Ruby" animal="Cat" breed="Long Hair" />
      <Pet name="Molly" animal="Cat" breed="Black Short Hair" />
      <Pet name="Gara" animal="Snake" breed="Ball Python" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
