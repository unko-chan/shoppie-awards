import React, { useState } from "react";
import "../../styles/Search.scss";
import SearchBar from "./SearchBar";

function Search(props) {
  const [input, setInput] = useState("");

  return (
      <div className="Search">
        <SearchBar setInput={setInput} />
        <div>{input}</div>
      </div>
  );
}

export default Search;
