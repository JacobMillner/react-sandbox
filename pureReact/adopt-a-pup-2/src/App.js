import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
