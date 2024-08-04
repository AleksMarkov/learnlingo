// import { configureStore } from "@reduxjs/toolkit";
// import interestsReducer from "../redux/cards/interestsSlice";
// // import advertsReducer from '../redux/adverts/advertsSlice';

// const store = configureStore({
//   reducer: {
//     interests: interestsReducer,
//     // adverts: advertsReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./root-reducer.js";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
