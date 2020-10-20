import { configureStore } from "@reduxjs/toolkit";
import { tablesSlice } from "./slices/tables";
import createSagaMiddleware from "redux-saga";
import {tablesSaga} from "./slices/tables/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  middleware: defaultMiddleware => defaultMiddleware().concat(sagaMiddleware),
  reducer: {
    [tablesSlice.name]: tablesSlice.reducer,
  },
});

sagaMiddleware.run(tablesSaga);