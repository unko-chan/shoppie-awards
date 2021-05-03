import React, { useState, useEffect } from "react";

function Results(props) {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    props.results ? setSearchResults(props.results) : setSearchResults([]);
  }, [props.results]);
  return searchResults.map((movie) => {
    return <div>{movie.Title}</div>;
  });
}

export default Results;
