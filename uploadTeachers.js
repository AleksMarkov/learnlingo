require("dotenv").config();
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Вставьте путь к вашему JSON-файлу
const teachersData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "teachers.json"), "utf8")
);

// Вставьте путь к вашему сервисному аккаунту
const serviceAccount = require(path.join(
  __dirname,
  process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH
));

// Инициализация Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learnlingo-e2fb6-default-rtdb.firebaseio.com", // Убедитесь, что это правильный URL базы данных
});

const db = admin.database();
const ref = db.ref("teachers");

// Функция для загрузки данных
const uploadData = async () => {
  try {
    await ref.set(teachersData);
    console.log("Data uploaded successfully");
  } catch (error) {
    console.error("Error uploading data:", error);
  } finally {
    process.exit();
  }
};

uploadData();
