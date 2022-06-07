import { collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

export const handleNew = async () => {
  const name = prompt("Enter color name");
  const value = prompt("Enter color value");

  const collectionRef = collection(db, "colors");
  const payload = { name, value };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new id is", docRef.id);
};

export const handleEdit = async (id) => {
  const name = prompt("Enter color name");
  const value = prompt("Enter color value");

  const docRef = doc(db, "colors", id);
  const payload = { name, value };
  setDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id);
  await deleteDoc(docRef);
}
