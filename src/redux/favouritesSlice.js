// favouritesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favouriteTeachers: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteTeachers.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favouriteTeachers = state.favouriteTeachers.filter(
        (teacher) => teacher.id !== action.payload.id
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

const persistConfig = {
  key: "favourites",
  storage,
};

const persistedFavouritesReducer = persistReducer(
  persistConfig,
  favouritesSlice.reducer
);

export default persistedFavouritesReducer;
