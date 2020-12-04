import { FunctionComponent, Fragment, memo } from "react";
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
import { InputCell } from "./components/InputCell";
import { ResultCell } from "./components/ResultCell";

export type TruthTableProps = {};

export const TruthTable: FunctionComponent<TruthTableProps> = (props) => {
  const { ...rest } = props;

  const stepsForInputs = useSelector(tableStepsSelector);

  return (
    <TableContainer {...rest} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <ResultCell />

            {stepsForInputs.map(({ input }) => (
              <InputCell input={input} key={JSON.stringify(input)} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stepsForInputs?.[0]?.steps.map(({ text }, i) => (
            <Row key={text} text={text}>
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
