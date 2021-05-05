import React, { useState } from "react";
import "../styles/App.scss";
import Search from "./Search/Search.js";
import NominateList from "./Nominate/NominateList.js";

function App(props) {
  const [nomination, setNomination] = useState({});
  const nominationList = { ...nomination };

  const addNomination = (movie) => {
    if (Object.keys(nominationList).length === 5) return;
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
      <Search setMovie={addNomination} nominations={nomination}/>
      <NominateList
        nominations={nomination}
        deleteNomination={deleteNomination}
      />
    </div>
  );
}

export default App;
