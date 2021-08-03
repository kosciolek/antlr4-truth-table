import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Box, LinearProgress, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useDebounce } from "../hooks/useDebounce";
import { useAppDispatch } from "../store/useAppDispatch";
import { tablesSlice } from "../store/slices/tables";
import { generateTableOnWorker } from "../store/slices/tables/saga";

export type FormulaInputProps = {};

export const FormulaInput: FunctionComponent<FormulaInputProps> = ({
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 500);

  useEffect(() => {
    dispatch(tablesSlice.actions.setFormula(debounced));
    dispatch(generateTableOnWorker(debounced));
  }, [dispatch, debounced]);

  const isDebouncing = value !== debounced;

  return (
    <Box p={4}>
      <TextField
        label="Expression"
        placeholder="A or B => C and B or C"
        fullWidth
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isDebouncing ? <LinearProgress /> : <Placeholder />}
    </Box>
  );
};

export const Placeholder = styled.div`
  height: 4px;
`;
