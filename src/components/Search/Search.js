import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Loading from "./Loading";
import Snackbar from "../Snackbar";
import Header from "../Header";
import noResultsImg from "../../img/noResults.png"

const API_KEY = process.env.REACT_APP_OMDB_KEY;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.4;
  padding: 1rem;
  border-right: solid 1px #474747;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    overflow-y: overlay;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 1rem;
`;

const NoResultsText = styled.div`
  color: #7f7f7f;
  padding: 1rem;
`

const NoResultsImg = styled.img`
  width: 250px;
`

function Search(props) {
  const [search, setSearch] = useState({
    term: "",
    results: [],
    loading: false,
  });

  const [error, setError] = useState({ state: false });

  function handleError(message) {
    setSearch({
      term: "",
      results: [],
      loading: false,
    });
    setError({ state: true, message });
  }

  //function for detailed movie results
  async function getMovie(searchResults) {
    //return movieArray after all promises have been resolved
    let movieArray = [];
    await Promise.all(
      searchResults.map((movie) =>
        axios
          .get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=${API_KEY}`
          )
          .then((response) => {
            movieArray.push(response.data);
          })
      )
    );
    return movieArray;
  }

  useEffect(() => {
    if (search.term === "" || search.term.length < 3) {
      setSearch({
        ...search,
        results: [],
      });
      return;
    }

    setSearch({
      ...search,
      results: [],
      loading: true,
    });

    axios
      .get(
        `https://www.omdbapi.com/?s=${search.term}&type=movie&apikey=${API_KEY}`
      )
      .then((response) => {
        //return if no results
        if (!response.data.Search) {
          setSearch((search) => ({
            ...search,
            results: undefined,
            loading: false,
          }));
          return;
        }

        //pass initial response to second api request for detailed movie listings
        getMovie(response.data.Search).then((res) => {
          setSearch({
            ...search,
            results: res,
          });
          setSearch((search) => ({
            ...search,
            loading: false,
          }));
        });
      })
      .catch((error) => {
        handleError(error.message);
      });
  }, [search.term]);

  console.log(search.results);

  return (
    <>
      <LeftContainer>
        <Header />
        <SearchBar onSearch={(term) => setSearch({ ...search, term })} />
        <Loading loading={search.loading} />
        <ResultsContainer>
          {search.results ? (
            <Results
              results={search.results}
              setMovie={props.setMovie}
              nominations={props.nominations}
            />
          ) : (
            <NoResults>
              <NoResultsText>Uh-oh! No results!</NoResultsText> 
              <NoResultsImg src={noResultsImg}/>
              <NoResultsText>Try again with different search terms!</NoResultsText> 
            </NoResults>
          )}
        </ResultsContainer>
      </LeftContainer>

      <Snackbar active={error.state} type={"danger"}>
        {error.message}
      </Snackbar>
    </>
  );
}

export default Search;
