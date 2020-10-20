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
import { ValueCell } from "./components/ValueCell";
import { Row } from "./components/Row";
import { StepCell } from "./components/StepCell";
import { InputCell } from "./components/InputCell";

export type TruthTableProps = {};

export const TruthTable: FunctionComponent<TruthTableProps> = (props) => {
  const { ...rest } = props;

  const stepsForInputs = useSelector(tableStepsSelector);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {/**/}
            <TableCell align="center" style={{ position: "sticky", left: 0 }}>
              Result
            </TableCell>

            {stepsForInputs.map(({ input }) => (
              <InputCell input={input} key={JSON.stringify(input)} />
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
