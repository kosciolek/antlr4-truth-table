import React, { useMemo, useState } from "react";
import { TextField } from "@material-ui/core";
import { generateTruthTable } from "./antlr";
import { useSelector } from "react-redux";
import { FormulaInput } from "./components/FormulaInput";
import { tableStepsSelector } from "./store/slices/tables";
import { TruthTable } from "./components/TruthTable";

function App() {
  const table = useSelector(tableStepsSelector);
  return (
    <>
      <FormulaInput />
      <TruthTable />
    </>
  );
}

export default App;
