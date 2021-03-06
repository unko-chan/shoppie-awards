import React from "react";
import Button from "./Button";
import styled from "styled-components";

const MovieItem = styled.article`
  display: flex;
  padding: 1rem;
  font-size: 14px;
  background: #1d1e1f;
  border-bottom: #474747 solid 1px;
`;

const Poster = styled.img`
  height: 142px;
  width: 96px;
`;

const MovieButton = styled.div`
  margin-left: auto;
`;

const MovieInfo = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const MovieTags = styled.div`
  font-size: 12px;
`;

const MoviePlot = styled.div`
  font-size 14px;
`;

const NoPoster = styled.div`
  display: flex;
  height: 140px;
  width: 110px;
  background: #474747;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: #808080;
`;

function MovieListItem(props) {
  return (
    <MovieItem key={props.imdbID}>
      {props.Poster === "N/A" ? (
        <NoPoster>
          <div>{props.Title}</div>
        </NoPoster>
      ) : (
        <Poster src={props.Poster} alt={props.Title} />
      )}
      <MovieInfo>
        <MovieTags>
          <MovieTitle>{props.Title}</MovieTitle>
          <div>
            {props.Year} | {props.Rated} | {props.Genre}
          </div>
          <br />
          <div>
            {props.Director} | {props.Actors}
          </div>
          <MoviePlot>{props.Plot}</MoviePlot>
        </MovieTags>
        <MovieButton>
          <Button
            color={props.color}
            onClick={props.onClick}
            disabled={props.disabled}
          >
            {props.button}
          </Button>
        </MovieButton>
      </MovieInfo>
    </MovieItem>
  );
}

export default MovieListItem;
