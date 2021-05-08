import React from "react";
import Button from "./Button";
import styled from "styled-components";

const MovieItem = styled.article`
  display: flex;
  padding: 1rem;
  font-size: 14px;
  background: #ededed;
  margin-bottom: 0.1rem;
`;

const Poster = styled.img`
  height: 142px;
  width: 96px;
`;

const Movie = styled.div``;

const MovieInfo = styled.div`
  padding-left: 1rem;
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const MovieRating = styled.div`
  font-size: 12px;
`;

function MovieListItem(props) {
  return (
    <MovieItem key={props.imdbID}>
      <Poster src={props.Poster} />
      <MovieInfo>
        <MovieTitle>
          {props.Title} ({props.Year})
        </MovieTitle>
        <MovieRating>
          {props.Rated} - {props.Genre}
        </MovieRating>
        <br />
        <div>{props.Plot}</div>
        <div>
          <b>Director: </b>
          {props.Director}
        </div>
        <div>
          <b>Stars: </b>
          {props.Actors}
        </div>
        <Movie>
          <div>
            <Button color={props.color} onClick={props.onClick}>
              {props.button}
            </Button>
          </div>
        </Movie>
      </MovieInfo>
    </MovieItem>
  );
}

export default MovieListItem;
