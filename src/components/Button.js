import React from "react";
import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "color: #fff; background: #4caf50; border: solid 1px #2ea043;";
    case "danger":
      return "color: #fff; background: #f56342; border: solid 1px #f67255;";
    default:
      return "color: #000; background: #eee;";
  }
};

const StyledButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  min-width: 5rem;
  cursor: pointer;
  ${({ color }) => handleColorType(color)};
`;

function Button(props) {
  return (
    <StyledButton
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
