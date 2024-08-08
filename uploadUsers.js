//uploadUsers.js
require("dotenv").config();
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const usersData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "users.json"), "utf8")
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
const ref = db.ref("users");

const uploadData = async () => {
  try {
    await ref.set(usersData);
    console.log(
      "Data users.json uploaded successfully to users Firebase Realtime Database"
    );
  } catch (error) {
    console.error("Error uploading data:", error);
  } finally {
    process.exit();
  }
};

uploadData();
