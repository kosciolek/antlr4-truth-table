import React, { Fragment, FunctionComponent, memo } from "react";
import { TruthTableInput } from "../../../../antlr";
import { TableCell } from "@material-ui/core";
import styled from "styled-components";
import { Variable } from "./components/Variable";

export type InputCellProps = { input: TruthTableInput };

export const InputCell: FunctionComponent<InputCellProps> = memo(
  (props) => {
    const { input, ...rest } = props;

    return (
      <TableCell
        {...rest}
        component={"th"}
        key={JSON.stringify(input)}
        align="center"
      >
        <span>
          <Column style={{ whiteSpace: "nowrap" }}>
            {Object.entries(input).map(([varName, value]) => (
              <Variable key={varName} name={varName} value={value} />
            ))}
          </Column>
        </span>
      </TableCell>
    );
  },
  (prevProps, nextProps) => {
    const prev = Object.keys(prevProps);
    const next = Object.keys(nextProps);
    if (prev.length !== next.length) return false;
    for (const p of prev) {
      if (prevProps[p] !== nextProps[p]) return false;
    }
    return true;
  }
);

const Column = styled.span`
  white-space: nowrap;
  display: inline-flex;
  flex-direction: column;
  align-items: baseline;
`;
