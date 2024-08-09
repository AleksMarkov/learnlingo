// api/teachers.js
import { database } from "../firebase";
import { ref, get, child } from "firebase/database";

export const fetchTeachers = async () => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, "teachers"));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      // console.log("No data available");
      return [];
    }
  } catch (error) {
    // console.error("Error fetching data:", error);
    return [];
  }
};
