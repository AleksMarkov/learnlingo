// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBErhKYA0GFbXXVsMKwZHEk7RK4NVXPVdM",
  authDomain: "learnlingo-e2fb6.firebaseapp.com",
  projectId: "learnlingo-e2fb6",
  storageBucket: "learnlingo-e2fb6.appspot.com",
  messagingSenderId: "320000177312",
  appId: "1:320000177312:web:1e487dc6677e07b5e245c5",
  measurementId: "G-9KL7BCKKCH",
  databaseURL: "https://learnlingo-e2fb6-default-rtdb.firebaseio.com", // Укажите URL вашей базы данных
};

// Initialize Firebase app
const Firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebaseapp);
const auth = getAuth(Firebaseapp);
const database = getDatabase(Firebaseapp); // Получение доступа к базе данных

// Экспорт объектов для использования в других частях приложения
export { auth, database, analytics };
