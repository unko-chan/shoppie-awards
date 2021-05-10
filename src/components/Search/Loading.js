import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transfrom: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  animation: ${spin} 0.5s linear infinite;
  border-top: 5px solid #555;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-self: center;
`;

function Loading(props) {
  return <>{props.loading && <Loader />}</>;
}

export default Loading;
