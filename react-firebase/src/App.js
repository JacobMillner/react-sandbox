import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import { handleNew, handleEdit, handleDelete } from "./utils";
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
            <button className="button2" onClick={() => handleEdit(color.id)}>edit</button>
            <button className="button2" onClick={() => handleDelete(color.id)}>delete</button>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
