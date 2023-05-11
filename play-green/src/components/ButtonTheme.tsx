import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

const StyledButton = styled.button`
  width: 63px;
  height: 63px;
  border-radius: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

export default function ButtonTheme() {
 
  return (
    <StyledButton >
     
    </StyledButton>
  );
}
