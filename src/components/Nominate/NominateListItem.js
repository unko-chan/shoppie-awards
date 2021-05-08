import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledNominateListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 12rem);
  grid-gap: 1rem;
  justify-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Poster = styled.img`
  width: 160px;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

function NominateListItem(props) {
  const nominatedMovies = Object.keys(props.nominations);

  return !Object.keys(props.nominations).length ? (
    <div>No nominations</div>
  ) : (
    nominatedMovies.map((nominatedMovie) => {
      let movie = props.nominations[nominatedMovie];
      return (
        <StyledNominateListItem>
          <Poster src={movie.Poster} />
          <Movie>
            {movie.Title}
            <div>({movie.Year})</div>
          </Movie>
          <Button onClick={() => props.deleteNomination(nominatedMovie)}>
            Remove
          </Button>
        </StyledNominateListItem>
      );
    })
  );
}

export default NominateListItem;
