import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "../redux-functions.js";
import { updateTheme } from "./theme-operations";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("selectedTheme") || "yellow",
    loading: false,
    error: null,
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTheme.pending, pending)
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.theme = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateTheme.rejected, rejected);
  },
});

export const themeReducer = themeSlice.reducer;
