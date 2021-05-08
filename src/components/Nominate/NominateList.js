import React from "react";
import NominateListItem from "./NominateListItem";
import styled from "styled-components";

const Nominate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly ;
  overflow-x: hidden;
  overflow-y: auto;
`;

function NominateList(props) {
  return (
    <Nominate>
      Your Nominations!
      <StyledList>
        <NominateListItem
          nominations={props.nominations}
          deleteNomination={props.deleteNomination}
        />
      </StyledList>
    </Nominate>
  );
}

export default NominateList;
