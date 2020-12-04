import { TableRow } from "@material-ui/core";
import styled from "styled-components";
import React, { FunctionComponent, memo } from "react";
import { StepCell } from "./components/StepCell";

export const Row: FunctionComponent<{ text: string }> = (props) => {
  const { children, text, ...rest } = props;

  return (
    <Root {...rest}>
      <StepCell>
        {text}
      </StepCell>
      {children}
    </Root>
  );
};

export const Root = styled(TableRow)``;
