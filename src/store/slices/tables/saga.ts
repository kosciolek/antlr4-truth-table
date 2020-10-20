import { createAction } from "@reduxjs/toolkit";
import { takeLatest, fork, cancel, take, takeEvery } from "redux-saga/effects";

export const generateTableOnWorker = createAction<string>("asd");

export function* generateOnWorker(
  worker: Worker,
  action: ReturnType<typeof generateTableOnWorker>
) {
  console.log("ASDASD");
  worker.postMessage({ type: "asd", payload: action.payload });
}

export function* tablesSaga() {

  takeEvery("*", function* () {
    console.log("hello!");
  });

  const workerAmount = 5;
  const workers = Array.from({ length: workerAmount }).map(
    () => new Worker("./worker.ts", { type: "module" })
  );

  workers.forEach((worker, i) => {
    worker.onmessage = (ev) => {
      console.log(`Message from worker ${i}`, ev.data);
    };
  });



  fork(function* () {
    console.log("FORK");
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
        action
      );
    }
  });
}
