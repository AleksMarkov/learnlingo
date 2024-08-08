// api/users.js
// api/users.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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

  // Update the user's profile with the display name
  await updateProfile(userCredential.user, {
    displayName: name,
  });

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
