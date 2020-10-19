import React, { FunctionComponent, useCallback, useState } from "react";
import { TextField } from "@material-ui/core";
import { useAppDispatch } from "../../store/useAppDispatch";
import { formulaSelector, tablesSlice } from "../../store/slices/tables";
import { useSelector } from "react-redux";

export type FormulaInputProps = {};

export const FormulaInput: FunctionComponent<FormulaInputProps> = (props) => {
  const { ...rest } = props;

  const dispatch = useAppDispatch();
  const onChange = useCallback((e) => {
    dispatch(tablesSlice.actions.setFormula(e.target.value));
  }, []);

  const value = useSelector(formulaSelector);

  return <TextField {...rest} value={value} onChange={onChange} />;
};
