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

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  await set(ref(db, "users/" + userCredential.user.uid), {
    name,
    email,
  });

  const token = await userCredential.user.getIdToken();

  return { userCredential, token };
};

export const loginUser = async ({ email, password }) => {
  const auth = getAuth();

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const token = await userCredential.user.getIdToken();

  return { userCredential, token };
};
