import React, { useState, useEffect } from "react";
import MovieListItem from "../MovieListItem";

let _ = require("lodash");

function Results(props) {
  const [searchResults, setSearchResults] = useState([]);

  //check if empty search
  useEffect(() => {
    props.results ? setSearchResults(props.results) : setSearchResults([]);
  }, [props.results]);

  //use lodash uniqBy to remove duplicate OMDB response results
  return _.uniqBy(searchResults, "imdbID").map((movie) => {
    return (
      <MovieListItem
        onClick={() => props.setMovie(movie)}
        {...movie}
        button={
          Object.keys(props.nominations).includes(movie.imdbID)
            ? "Added!"
            : "Add"
        }
        color={"primary"}
        disabled={
          Object.keys(props.nominations).includes(movie.imdbID) ? true : false
        }
      />
    );
  });
}

export default Results;
