import React, { useState, useEffect } from "react";
let _ = require('lodash')

function Results(props) {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    props.results ? setSearchResults(props.results) : setSearchResults([]);
  }, [props.results]);

  return _.uniqBy(searchResults, 'imdbID').map((movie) => {
    return (
      <article className="movie" key={movie.imdbID}>
        <img className="movie__poster" src={movie.Poster} />
        <div className="movie__info">
          <div className="move__title">{movie.Title}</div>
          <div className="movie__year">{movie.Year}</div>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb</a>
        </div>
      </article>
    );
  });
}

export default Results;
