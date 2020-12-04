import { TruthTable } from "../index";
import React from "react";
import { withStore } from "../../../utils/storybook/withStore";
import { Provider } from "react-redux";
import { configureAppStore } from "../../../store";

export default { title: "Table1" };

// @ts-ignore
export const A = withStore({
  tables: { formula: "a impl b impl c impl de or z or s", truthTable: [] },
})(() => <TruthTable />);
