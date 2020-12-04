import { generateTruthTable } from "@attg/antlr";

onmessage = (ev) => {
  console.log("msg in worker", ev.data);
  const {
    data: { payload, taskIndex },
  } = ev;
  if (payload)
    postMessage({
      status: "success",
      table: generateTruthTable(payload),
      taskIndex,
    });
};

export {};
