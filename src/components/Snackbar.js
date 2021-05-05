import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(0.75);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.75);
    opacity: 0;
  }
`;

const StyledSnackbar = styled.div`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  min-width: 250px;
  margin-left: -125px;
  background-color: #4caf50;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 15px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 1rem;
  animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.1s ease;
  transition: visibility 0.1s linear;
`;

function Snackbar(props) {

  return <StyledSnackbar active={props.active}>{props.children}</StyledSnackbar>;
}

export default Snackbar;
