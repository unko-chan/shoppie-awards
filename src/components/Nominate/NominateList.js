import React from "react";
import NominateListItem from "./NominateListItem";

function NominateList(props) {
  return (
    <>
      <div>Nominate List</div>
      <NominateListItem nominations={props.nominations}/>
    </>
  );
}

export default NominateList;
