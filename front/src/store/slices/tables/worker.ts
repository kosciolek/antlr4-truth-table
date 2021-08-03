import { generateTruthTable } from "@attg/antlr";

onmessage = (ev) => {
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
