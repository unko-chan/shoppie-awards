import React from "react";

function NominateListItem({ nominations }) {
  console.log("list", nominations);
  console.log(nominations);
  return !nominations.length ? (
    <div>No nominations</div>
  ) : (
    nominations.map((movie) => {
      return (
        <article className="nominations" key={movie.imdbID}>
          <img className="nominations__poster" src={movie.Poster} />
          <div className="nominations__info">
            <div className="move__title">{movie.Title}</div>
            <div className="nominations__year">{movie.Year}</div>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb</a>
          </div>
        </article>
      );
    })
  );
}

export default NominateListItem;
