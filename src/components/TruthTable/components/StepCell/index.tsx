import { TableCell } from "@material-ui/core";
import styled from "styled-components";

export const StepCell = styled(TableCell)`
  padding: 0;
  white-space: nowrap;
  border: none;
  position: sticky;
  left: 0;
  background-color: whitesmoke;
`;

StepCell.defaultProps = {
  component: "th",
  align: "left",
};
