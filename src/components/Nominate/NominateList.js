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

const NominationHeader = styled.div`
  border-bottom: #474747 solid 1px;
  padding: 1rem;
`;

function NominateList(props) {
  return (
    <RightContainer>
      <NominationHeader>Your Nominations</NominationHeader>
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
