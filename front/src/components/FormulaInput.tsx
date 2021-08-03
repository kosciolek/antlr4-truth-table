import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Box, TextField } from "@material-ui/core";
import { useDebounce } from "../hooks/useDebounce";
import { useAppDispatch } from "../store/useAppDispatch";
import { formulaSelector, tablesSlice } from "../store/slices/tables";
import { useSelector } from "react-redux";
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

  return (
    <Box p={4}>
      <TextField
        label="Put your expression here"
        fullWidth
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};
