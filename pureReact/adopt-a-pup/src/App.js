const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
