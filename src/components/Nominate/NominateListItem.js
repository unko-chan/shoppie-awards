import React from "react";
import MovieListItem from "../MovieListItem";

function NominateListItem(props) {
  const nominatedMovies = Object.keys(props.nominations);

  return !Object.keys(props.nominations).length ? (
    <div>No nominations</div>
  ) : (
    nominatedMovies.map((nominatedMovie) => {
      let movie = props.nominations[nominatedMovie];
      return (
        <MovieListItem
          onClick={() => props.deleteNomination(nominatedMovie)}
          {...movie}
          button={"Remove"}
        />
      );
    })
  );
}

export default NominateListItem;
