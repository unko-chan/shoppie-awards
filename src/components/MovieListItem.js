import React from "react";
import Button from "./Button";
import styled from "styled-components";

const MovieContainer = styled.article`
  display: flex;
  align-items: center;
  border: solid rgba(0, 0, 0, 0.233) 1px;
`;

const Poster = styled.img`
  width: 48px;
`;

const Movie = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

function MovieListItem(props) {
  return (
    <MovieContainer key={props.imdbID}>
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
    </MovieContainer>
  );
}

export default MovieListItem;
