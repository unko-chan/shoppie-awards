import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import MovieListItem from "../MovieListItem";

let _ = require("lodash");

function Results(props) {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    props.results ? setSearchResults(props.results) : setSearchResults([]);
  }, [props.results]);

  return _.uniqBy(searchResults, "imdbID").map((movie) => {
    return (
      <MovieListItem
        onClick={() => props.setMovie(movie)}
        {...movie}
        button={"Add"}
      />
    );
  });
}

export default Results;
