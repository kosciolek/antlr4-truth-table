import { configureStore } from "@reduxjs/toolkit";
import { tablesSlice } from "./slices/tables";
import createSagaMiddleware from "redux-saga";
import { tableWorkerDispatcher } from "./slices/tables/saga";
import { RootState } from "./RootState";

export const configureAppStore = (preloadedState?: RootState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    preloadedState,
    middleware: (defaultMiddleware) =>
      defaultMiddleware().concat(sagaMiddleware),
    reducer: {
      [tablesSlice.name]: tablesSlice.reducer,
    },
  });
  sagaMiddleware.run(tableWorkerDispatcher);
  return store;
};
