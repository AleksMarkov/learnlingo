import { database } from "./firebase";
import { ref, set, get } from "firebase/database";

// Пример функции для записи данных в узел 'teachers'
const addTeacher = async (teacherData) => {
  try {
    const teachersRef = ref(database, "teachers");
    await set(teachersRef, teacherData);
    console.log("Teacher data added successfully.");
  } catch (error) {
    console.error("Error adding teacher data:", error);
  }
};

// Пример функции для записи данных в узел 'users'
const addUser = async (userData) => {
  try {
    const usersRef = ref(database, "users");
    await set(usersRef, userData);
    console.log("User data added successfully.");
  } catch (error) {
    console.error("Error adding user data:", error);
  }
};

// Пример использования
addTeacher({ name: "John Doe", subject: "Math" });
addUser({ name: "Jane Smith", email: "jane@example.com" });
