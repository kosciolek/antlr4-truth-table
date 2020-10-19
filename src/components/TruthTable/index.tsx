import { FunctionComponent, Fragment } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { tableStepsSelector } from "../../store/slices/tables";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { ValueCell } from "./components/ValueCell";
import { Row } from "./components/Row";
import { StepCell } from "./components/StepCell";

export type TruthTableProps = {};

export const TruthTable: FunctionComponent<TruthTableProps> = (props) => {
  const { ...rest } = props;

  const stepsForInputs = useSelector(tableStepsSelector);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Result</TableCell>

            {stepsForInputs.map(({ input }) => (
              <TableCell key={JSON.stringify(input)} align="center">
                {Object.entries(input).map(([varName, value]) => (
                  <Fragment key={varName}>
                    <span style={{ whiteSpace: "nowrap" }}>
                      {varName} = {value.toString()}
                    </span>
                    <br />
                  </Fragment>
                ))}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stepsForInputs?.[0]?.steps.map(({ text }, i) => (
            <Row key={text}>
              <StepCell component="th" scope="row">
                {text}
              </StepCell>
              {stepsForInputs.map(({ steps, input }) => (
                <ValueCell value={steps[i].value} key={JSON.stringify(input)} />
              ))}
            </Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
