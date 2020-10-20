import React, { FunctionComponent } from "react";
import styled from "styled-components";

export type VariableProps = { name: string; value: boolean };

export const Variable: FunctionComponent<VariableProps> = (props) => {
  const { name, value, ...rest } = props;

  return (
    <Root {...rest}>
      {name} = {value.toString()}
    </Root>
  );
};

const Root = styled.span``;
