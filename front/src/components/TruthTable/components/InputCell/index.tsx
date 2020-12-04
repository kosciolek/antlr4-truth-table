import React, { Fragment, FunctionComponent, memo } from "react";
import { TruthTableInput } from "@attg/antlr";
import { TableCell } from "@material-ui/core";
import styled from "styled-components";
import { Variable } from "./components/Variable";

export type InputCellProps = { input: TruthTableInput };

export const InputCell: FunctionComponent<InputCellProps> = memo(
  (props) => {
    const { input, ...rest } = props;

    return (
      <STableCell
        {...rest}
        component={"th"}
        key={JSON.stringify(input)}
        align="center"
      >
        <div>
          <Column style={{ whiteSpace: "nowrap" }}>
            {Object.entries(input).map(([varName, value]) => (
              <Variable key={varName} name={varName} value={value} />
            ))}
          </Column>
        </div>
      </STableCell>
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const STableCell = styled(TableCell)`
  &:not(:last-child) {
    border-right: 8px solid #dedede;
  }
  padding: 0 0 0 15px;
`;
