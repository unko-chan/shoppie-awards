import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import MovieListItem from "../MovieListItem";

let _ = require("lodash");

function Results(props) {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    props.results.length ? setSearchResults(props.results) : setSearchResults([]);
  }, [props.results]);

  return _.uniqBy(searchResults, "imdbID")
    .map((movie) => {
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
            Object.keys(props.nominations).includes(movie.imdbID)
              ? true
              : false
          }
        />
      );
    });
}

export default Results;
