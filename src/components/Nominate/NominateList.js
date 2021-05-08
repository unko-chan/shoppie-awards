import React from "react";
import NominateListItem from "./NominateListItem";
import styled from "styled-components";

const Nominate = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 3px orange;
  flex: 1;
`;

function NominateList(props) {
  return (
    <Nominate>
      Nominate List
      <NominateListItem
        nominations={props.nominations}
        deleteNomination={props.deleteNomination}
      />
    </Nominate>
  );
}

export default NominateList;
