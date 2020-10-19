import {configureStore,} from "@reduxjs/toolkit";
import {tablesSlice} from "./slices/tables";

export const store = configureStore({
  reducer: {
    [tablesSlice.name]: tablesSlice.reducer,
  },
});
