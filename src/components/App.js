import React, { useState } from "react";
import "../styles/App.scss";
import Search from "./Search/Search.js";
import NominateList from "./Nominate/NominateList.js";



function App(props) {

  const [nomination, setNomination] = useState({})

  const addNomination = (movie) => {
    const nominationList = {...nomination}
    nominationList[movie.imdbID] = { ...movie }
    setNomination(nominationList)
  }

  console.log(nomination)

  return (
    <div className="app">
      <Search setMovie={addNomination}/>
      <NominateList nominations={nomination}/>
    </div>
  );
}

export default App;
