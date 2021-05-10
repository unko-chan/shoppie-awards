import React from "react";
import MovieListItem from "../MovieListItem";
import styled from "styled-components";
import sad from "../../img/sad.png";

const NoNominations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const NoNominationsText = styled.div`
  color: #7f7f7f;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function NominateListItem(props) {
  const nominatedMovies = Object.keys(props.nominations);

  return !Object.keys(props.nominations).length ? (
    <NoNominations>
      <NoNominationsText>
        <div>Uh-oh! You currently have no nominations!</div>
        <img src={sad} alt={"sad face drawn with mspaint"}/>
        <div>Search for movies and add them to your list!</div>
      </NoNominationsText>
    </NoNominations>
  ) : (
    nominatedMovies.map((nominatedMovie) => {
      let movie = props.nominations[nominatedMovie];
      return (
        <MovieListItem
          onClick={() => props.deleteNomination(nominatedMovie)}
          {...movie}
          button={"Remove"}
          color={"danger"}
          Plot={null}
        />
      );
    })
  );
}

export default NominateListItem;
