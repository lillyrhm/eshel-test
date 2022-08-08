import * as React from "react";
import styled from "styled-components";


export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;


// Styled component named StyledButton
export const StyledButton = styled.button`
  background-color: var(--app);
  broder-radus:string;
  font-size: 18px;
  color: black;
`;

export const Div = styled.div`
  background-color: var(--white);
  width:100%;
  heigh:auto;
  padding:30px;
  broder-radus:40px;
  font-size: 18px;
  color: black;
`;
