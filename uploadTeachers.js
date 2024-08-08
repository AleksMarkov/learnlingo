//uploadTeahers.js
require("dotenv").config();
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Load teachers data from JSON file
const teachersData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "teachers.json"), "utf8")
);

// Load service account key
const serviceAccount = require(path.join(
  __dirname,
  process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH
));

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

const db = admin.database();
const ref = db.ref("teachers");

// Add unique IDs to each teacher and upload data function
const uploadData = async () => {
  try {
    const teachersWithId = teachersData.map((teacher) => ({
      ...teacher,
      id: uuidv4(),
    }));
    await ref.set(teachersWithId);
    console.log("Data uploaded successfully");
  } catch (error) {
    console.error("Error uploading data:", error);
  } finally {
    process.exit();
  }
};

uploadData();
