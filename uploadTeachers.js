//uploadTeahers.js
require("dotenv").config();
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

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

// Upload data function
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
