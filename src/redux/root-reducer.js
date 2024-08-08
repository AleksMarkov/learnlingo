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
  whitelist: ["token", "selectedTheme", "favourites", "auth"],
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  theme: persistedThemeReducer,
  favourites: favouritesReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
