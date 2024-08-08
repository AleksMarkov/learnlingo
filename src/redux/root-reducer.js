// root-reducer.js
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { themeReducer } from "./theme/theme-slice";
import favouritesReducer from "./favouritesSlice";
import authReducer from "./authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "favourites", "auth"],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  favourites: favouritesReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
