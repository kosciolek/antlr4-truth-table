import { createAction } from "@reduxjs/toolkit";
import {
  takeLatest,
  call,
  fork,
  cancel,
  take,
  takeEvery,
  put,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { tablesSlice } from "./index";

export const generateTableOnWorker = createAction<string>("asd");

export function* generateOnWorker(
  worker: Worker,
  taskIndex: number,
  action: ReturnType<typeof generateTableOnWorker>
) {
  worker.postMessage({ type: "asd", taskIndex, payload: action.payload });
}

export function* channel(workers: Worker[]) {
  return eventChannel((emit) => {
    workers.forEach((worker, i) => {
      worker.onmessage = (ev) => {
        emit(ev.data);
      };
    });
    return () => {};
  });
}

export function* tableWorkerDispatcher() {
  const workerAmount = 5;
  const workers = Array.from({ length: workerAmount }).map(
    () => new Worker("./worker.ts", { type: "module" })
  );

  let taskIndex = 0;
  const workerChannel = yield call(channel, workers);
  yield fork(function* () {
    yield takeEvery(workerChannel, function* (data: any) {
      console.log(data.taskIndex, taskIndex);
      if (data.taskIndex === taskIndex - 1) {
        console.log("INDEX MATCHING", data);
        yield put(tablesSlice.actions.setTruthTable(data.table));
      }
    });
  });

  yield fork(function* () {
    let workerIndex = 0;
    let lastTask;
    while (true) {
      const action = yield take(generateTableOnWorker.type);
      if (lastTask) {
        yield cancel(lastTask);
      }
      lastTask = yield fork(
        generateOnWorker,
        workers[workerIndex++ % workerAmount],
        taskIndex++,
        action
      );
    }
  });
}
