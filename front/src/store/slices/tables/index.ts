import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateTruthTable } from "@attg/antlr";
import { RootState } from "../../RootState";

export type TablesSliceType = typeof initialState;
const initialState = {
  formula: "",
  truthTable: [] as ReturnType<typeof generateTruthTable>,
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setFormula: (state, action: PayloadAction<string>) => {
      state.formula = action.payload;
    },
    setTruthTable: (
      state,
      action: PayloadAction<ReturnType<typeof generateTruthTable>>
    ) => {
      state.truthTable = action.payload;
    },
  },
});

export const formulaSelector = (state: RootState) => state.tables.formula;
export const tableStepsSelector = (state: RootState) => state.tables.truthTable;
