import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import { handleNew, handleEdit } from "./utils";
import Dot from "./Dot";

function App() {
  const [colors, setColors] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) => {
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>
        New
      </button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#" onClick={() => handleEdit(color.id)}>
              edit
            </a>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
