import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";

// export const makeStore = () =>
//   configureStore({
//     reducer: {
//       [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
//   });
const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

export default store;
