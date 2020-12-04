import { TableCell } from "@material-ui/core";
import styled from "styled-components";
import React, { FC } from "react";

export const StepCell: FC = (props) => (
  <STableCell component="th" scope="row">
    <MaxWidthWrapper>{props.children}</MaxWidthWrapper>
  </STableCell>
);

const MaxWidthWrapper = styled.div`
  max-width: min-content;
  display: inline-block;
`;

const STableCell = styled(TableCell)`
  padding: 4px 16px;
  white-space: nowrap;
  border: none;
  position: sticky;
  left: 0;
  background-color: whitesmoke;
`;

STableCell.defaultProps = {
  component: "th",
  align: "right",
};
