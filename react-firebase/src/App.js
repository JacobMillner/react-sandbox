import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
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
  const [colors, setColors] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) => {
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  const handleNew = async () => {
    const name = prompt("Enter color name");
    const value = prompt("Enter color value");

    const collectionRef = collection(db, "colors");
    const payload = { name, value };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new id is", docRef.id);
  };

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>
        New
      </button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#">edit</a>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
