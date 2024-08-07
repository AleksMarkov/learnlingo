// api/users.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const registerUser = async ({ name, email, password }) => {
  const auth = getAuth();
  const db = getDatabase();

  // Create user with email and password
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  // Save user details to the Realtime Database
  await set(ref(db, "users/" + userCredential.user.uid), {
    name,
    email,
  });

  // Get the ID token
  const token = await userCredential.user.getIdToken();

  return { userCredential, token };
};

export const loginUser = async ({ email, password }) => {
  const auth = getAuth();

  // Sign in user with email and password
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  // Get the ID token
  const token = await userCredential.user.getIdToken();

  return { userCredential, token };
};
