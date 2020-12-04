import React, { useMemo, useState } from "react";
import { FormulaInput } from "./components/FormulaInput";

import { TruthTable } from "./components/TruthTable";
import { GlobalStyles } from "./styles/GlobalStyles";

/* Initialize the table-generating worker. */
import "./store/slices/tables/worker";

function App() {
  return (
    <>
      <FormulaInput />
      <TruthTable />
    </>
  );
}

export default App;
