import React, { FunctionComponent, useCallback, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import { useAppDispatch } from "../store/useAppDispatch";
import { formulaSelector, tablesSlice } from "../store/slices/tables";
import { useSelector } from "react-redux";
import { generateTableOnWorker } from "../store/slices/tables/saga";

export type FormulaInputProps = {};

export const FormulaInput: FunctionComponent<FormulaInputProps> = (props) => {
  const { ...rest } = props;

  const dispatch = useAppDispatch();
  const onChange = useCallback((e) => {
    dispatch(tablesSlice.actions.setFormula(e.target.value));
    dispatch(generateTableOnWorker(e.target.value));
  }, []);

  const value = useSelector(formulaSelector);

  return (
    <Box p={4}>
      <TextField label="Put your expression here" fullWidth {...rest} value={value} onChange={onChange} />
    </Box>
  );
};
