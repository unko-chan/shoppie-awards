import React from "react";
import Button from "./Button";
import styled from "styled-components";

const MovieItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  border: solid 1px black;
  width: 15rem;
`;

const Poster = styled.img`
  width: 100%;
`;

const Movie = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; ;
`;

function MovieListItem(props) {
  return (
    <MovieItem key={props.imdbID}>
      <Poster src={props.Poster} />
      <Movie>
        <div>
          <div>{props.Title}</div>
          <div>{props.Year}</div>
          <a href={`https://www.imdb.com/title/${props.imdbID}`}>IMDb</a>
        </div>
        <div>
          <Button color={props.color} onClick={props.onClick}>
            {props.button}
          </Button>
        </div>
      </Movie>
    </MovieItem>
  );
}

export default MovieListItem;
