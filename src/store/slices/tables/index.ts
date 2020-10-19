import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateTruthTable} from "../../../antlr";
import {RootState} from "../../RootState";

export type TablesSliceType = typeof initialState;
const initialState = {formula: ""};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setFormula: (state, action: PayloadAction<string>) => {
      state.formula = action.payload;
    },
  },
});
export const formulaSelector = (state: RootState) => state.tables.formula;
export const tableStepsSelector = createSelector([formulaSelector], (formula) =>
  generateTruthTable(formula)
);