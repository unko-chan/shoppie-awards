import React from "react";
import NominateListItem from "./NominateListItem";
import styled from "styled-components";

const Nominations = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  &:hover {
    overflow-y: overlay;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 0.5;
`;

function NominateList(props) {
  return (
    <RightContainer>
      Your Nominations:
      <Nominations>
        <NominateListItem
          nominations={props.nominations}
          deleteNomination={props.deleteNomination}
        />
      </Nominations>
    </RightContainer>
  );
}

export default NominateList;
