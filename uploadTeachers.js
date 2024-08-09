//uploadTeahers.js
require("dotenv").config();
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const teachersData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "teachers.json"), "utf8")
);

const serviceAccount = require(path.join(
  __dirname,
  process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

const db = admin.database();
const ref = db.ref("teachers");

const uploadData = async () => {
  try {
    const teachersWithId = teachersData.map((teacher) => ({
      ...teacher,
      id: uuidv4(),
    }));
    await ref.set(teachersWithId);
    // console.log("Data uploaded successfully");
  } catch (error) {
    // console.error("Error uploading data:", error);
  } finally {
    process.exit();
  }
};

uploadData();
