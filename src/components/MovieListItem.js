import React from "react";
import Button from "./Button";


function MovieListItem(props) {
  return (
    <article className="movie__container" key={props.imdbID}>
      <img className="movie__poster" src={props.Poster} />
      <div className="movie__info">
        <div>{props.Title}</div>
        <div>{props.Year}</div>
        <a href={`https://www.imdb.com/title/${props.imdbID}`}>IMDb</a>
      </div>
      <div className="button">
        <Button color={props.color} onClick={props.onClick}>{props.button}</Button>
      </div>
    </article>
  );
}

export default MovieListItem;
