// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cart.jsx";
// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart.jsx";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);
