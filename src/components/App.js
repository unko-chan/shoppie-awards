import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search/Search.js";
import NominateList from "./Nominate/NominateList.js";
import Snackbar from "./Snackbar";

const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 3px);
  margin-left: 5rem;
  margin-right: 5rem;
`;

function App(props) {
  const [nomination, setNomination] = useState({});
  const nominationList = { ...nomination };

  const maxNominations = Object.keys(nominationList).length === 5;

  const addNomination = (movie) => {
    if (maxNominations) return;
    nominationList[movie.imdbID] = { ...movie };
    setNomination(nominationList);
  };

  const deleteNomination = (movie) => {
    delete nominationList[movie];
    setNomination(nominationList);
  };

  return (
    <CenterContainer>
      <Search setMovie={addNomination} nominations={nomination} />
      <NominateList
        nominations={nomination}
        deleteNomination={deleteNomination}
      />
      <Snackbar active={maxNominations} type={"success"}>
        You have selected 5 nominations!
      </Snackbar>
    </CenterContainer>
  );
}

export default App;
