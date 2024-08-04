import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { themeReducer } from "./theme/theme-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "selectedTheme"],
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const rootReducer = combineReducers({
  theme: persistedThemeReducer,
});

export default rootReducer;
