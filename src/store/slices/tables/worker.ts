import { generateTruthTable } from "../../../antlr";

onmessage = (ev) => {
  console.log("msg in worker", ev.data);
  const { data } = ev;
  if (data.payload)
    postMessage({
      status: "success",
      table: generateTruthTable(ev.data.payload),
    });
};

export {};
