import React from "react";
import NominateListItem from "./NominateListItem";
import "../../styles/NominateList.scss";

function NominateList(props) {
  return (
    <div>
      Nominate List
      <NominateListItem
        nominations={props.nominations}
        deleteNomination={props.deleteNomination}
      />
    </div>
  );
}

export default NominateList;
