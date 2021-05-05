import React, { useState } from "react";
import "../styles/App.scss";
import Search from "./Search/Search.js";
import NominateList from "./Nominate/NominateList.js";
import Snackbar from "./Snackbar"

function App(props) {
  const [nomination, setNomination] = useState({});
  const nominationList = { ...nomination };

  const maxNominations = (Object.keys(nominationList).length === 5)

  const addNomination = (movie) => {
    if (maxNominations) return;
    nominationList[movie.imdbID] = { ...movie };
    setNomination(nominationList);
  };

  const deleteNomination = (movie) => {
    delete nominationList[movie];
    setNomination(nominationList);
  };

  console.log(nomination);

  return (
    <div className="app">
      <Search setMovie={addNomination} nominations={nomination} />
      <NominateList
        nominations={nomination}
        deleteNomination={deleteNomination}
      />
      <Snackbar active={maxNominations}>You have selected 5 nominations!</Snackbar>
    </div>
  );
}

export default App;
