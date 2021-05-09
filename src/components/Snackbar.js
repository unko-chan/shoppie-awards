import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

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

const handleIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircleOutlineIcon />;
    case "danger":
      return <ErrorOutlineIcon />;
  }
};

const handleBackground = (type) => {
  switch (type) {
    case "success":
      return "#4caf50";
    case "danger":
      return "#f44336";
    default:
      return;
  }
};

const StyledSnackbar = styled.div`
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  margin-left: -125px;
  background-color: ${({ type }) => handleBackground(type)};
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 15px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 1rem;
  animation: ${(props) => (props.display ? fadeIn : fadeOut)} 0.1s ease;
  transition: visibility 0.1s linear;
`;

const Text = styled.span`
  margin-right: 0.5em;
  margin-left: 0.5em;
`;

function Snackbar(props) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (props.active) {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 5000);
    }
  }, [props.active]);

  return (
    <StyledSnackbar active={props.active} type={props.type} display={display}>
      {handleIcon(props.type)}
      <Text>{props.children}</Text>
    </StyledSnackbar>
  );
}

export default Snackbar;
