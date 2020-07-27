import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <React.StrictMode>
        <SearchParams />
      </React.StrictMode>
    </div>
  );
};

render(<App />, document.getElementById("root"));
