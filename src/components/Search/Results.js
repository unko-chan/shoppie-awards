import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import MovieListItem from "../MovieListItem";

let _ = require("lodash");

function Results(props) {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    props.results ? setSearchResults(props.results) : setSearchResults([]);
  }, [props.results]);

  console.log("nominations", Object.keys(props.nominations));

  return _.uniqBy(searchResults, "imdbID").slice(0, 5).map((movie) => {
    return (
      <MovieListItem
        onClick={() => props.setMovie(movie)}
        {...movie}
        button={
          Object.keys(props.nominations).includes(movie.imdbID)
            ? "Added"
            : "Add"
        }
      />
    );
  });
}

export default Results;
