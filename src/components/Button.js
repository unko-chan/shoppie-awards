import React from "react";
import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "color: #03a9f3; background: #000;";
    case "danger":
      return "color: #fff; background: #f56342;";
    default:
      return "color: #000; background: #eee;";
  }
};

const StyledButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  ${({ color }) => handleColorType(color)};
`;

function Button(props) {
  return (
    <StyledButton color={props.color} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
