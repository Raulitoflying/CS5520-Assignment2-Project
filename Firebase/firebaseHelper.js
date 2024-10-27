import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

// Function to write data to a specified collection in Firestore
export async function writeToDB(data, collectionName) {
  try {
    // Add a new document with the provided data to the specified collection
    const docRef = await addDoc(collection(database, collectionName), data);
    console.log(docRef); // Log the reference to the newly added document
  } catch (err) {
    console.log("Write to DB ", err); // Log any errors that occur during the write operation
  }
}

// Function to delete a document from a specified collection in Firestore
export async function deleteFromDB(deletedId, collectionName) {
  try {
    // Delete the document with the specified ID from the specified collection
    await deleteDoc(doc(database, collectionName, deletedId));
  } catch (err) {
    console.log("Delete from DB ", err); // Log any errors that occur during the delete operation
  }
}

// Function to update a document in a specified collection in Firestore
export async function updateInDB(data, docId, collectionName) {
  try {
    // Update the document with the specified ID in the specified collection with the provided data
    await updateDoc(doc(database, collectionName, docId), data);
  } catch (err) {
    console.log("Update in DB ", err); // Log any errors that occur during the update operation
  }
}