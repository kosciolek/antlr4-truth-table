import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { TableCell } from "@material-ui/core";
import styled from "styled-components";

export type ValueCellProps = {
  value: boolean;
};

export const ValueCell: FunctionComponent<ValueCellProps> = (props) => {
  const { value, ...rest } = props;

  return (
    <STableCell value={value} {...rest} align="center">
      <IconContainer>{value ? <CheckIcon /> : <ClearIcon />}</IconContainer>
    </STableCell>
  );
};

const STableCell = styled(TableCell)<Pick<ValueCellProps, "value">>`
  padding: 0;
  background-color: ${({ value }) => (value ? "green" : "red")};
  vertical-align: middle;
  border: none;
  color: white;

  &.MuiTableCell-sizeSmall:last-child {
    padding: 0;
  }
`;

const IconContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;
