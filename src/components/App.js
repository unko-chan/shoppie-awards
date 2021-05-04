import React, { useState } from "react";
import "../styles/App.scss";
import Search from "./Search/Search.js";
import NominateList from "./Nominate/NominateList.js";



function App(props) {

  const setMovie = (movie) => setNomination([...nomination, movie])
  const [nomination, setNomination] = useState([])
  console.log(nomination)

  return (
    <div className="app">
      <Search setMovie={setMovie}/>
      <NominateList nominations={nomination}/>
    </div>
  );
}

export default App;
