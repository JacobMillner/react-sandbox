import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Ruby Rails",
      animal: "Cat",
      breed: "Blond"
    }),
    React.createElement(Pet, { name: "Molly", animal: "Cat", breed: "Black" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
