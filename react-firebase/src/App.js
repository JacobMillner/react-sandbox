import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
import db from "./firebase";

const Dot = ({ color }) => {
  const dotStyle = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
  };
  return <span style={dotStyle}></span>;
};

function App() {
  useEffect(() => {
    onSnapshot(collection(db, "colors"), (snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()));
    });
  });
  return (
    <div className="root">
      <button className="button">New</button>
      <ul>
        <li>
          <a href="#">edit</a>
          <Dot color="#f00" /> Red
        </li>
        <li>
          <a href="#">edit</a>
          <Dot color="#0f0" /> Green
        </li>
        <li>
          <a href="#">edit</a>
          <Dot color="#00f" /> Blue
        </li>
      </ul>
    </div>
  );
}

export default App;
