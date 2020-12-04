import React, { FunctionComponent, memo } from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { Icon } from "@material-ui/core";

export type VariableProps = { name: string; value: boolean };

export const Variable: FunctionComponent<VariableProps> = memo((props) => {
  const { name, value, ...rest } = props;

  return (
    <Root {...rest}>
      <VariableName>{name}</VariableName>
      <IconWrapper value={value}>
        {value ? <CheckIcon /> : <ClearIcon />}
      </IconWrapper>
    </Root>
  );
});

const IconWrapper = styled.span<Pick<VariableProps, "value">>`
  color: white;
  background-color: ${({ value, theme }) =>
    value ? theme.palette.correct : theme.palette.wrong};
  margin-left: 4px;

  & > .MuiSvgIcon-root {
    font-size: 1.35rem;
  }

  width: 50%;
  min-width: 24px;
`;

const VariableName = styled.span`
  font-size: 1.2rem;
  font-weight: normal;
`;

const Root = styled.span`
  text-align: left;

  display: flex;
  align-items: stretch;
  justify-content: flex-end;
`;
