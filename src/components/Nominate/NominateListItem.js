import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

function NominateListItem(props) {
  const nominatedMovies = Object.keys(props.nominations);

  return !Object.keys(props.nominations).length ? (
    <div>No nominations</div>
  ) : (
    nominatedMovies.map((nominatedMovie) => {
      let movie = props.nominations[nominatedMovie];
      return (
        <article className="movie" key={movie.imdbID}>
          <img className="movie__poster" src={movie.Poster} />
          <div className="movie__info">
            <div className="move__title">{movie.Title}</div>
            <div className="movie__year">{movie.Year}</div>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb</a>
          </div>
          <RemoveIcon className="icon__remove" onClick={() => props.deleteNomination(nominatedMovie)}/>
        </article>
      );
    })
  );
}

export default NominateListItem;
