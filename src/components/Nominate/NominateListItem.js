import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

function NominateListItem({ nominations }) {
  const nominatedMovies = Object.keys(nominations);

  return !Object.keys(nominations).length ? (
    <div>No nominations</div>
  ) : (
    nominatedMovies.map((nominatedMovie) => {
      let movie = nominations[nominatedMovie];
      return (
        <article className="movie" key={movie.imdbID}>
          <img className="movie__poster" src={movie.Poster} />
          <div className="movie__info">
            <div className="move__title">{movie.Title}</div>
            <div className="movie__year">{movie.Year}</div>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb</a>
          </div>
          <RemoveIcon className="icon__remove" />
        </article>
      );
    })
  );
}

export default NominateListItem;
