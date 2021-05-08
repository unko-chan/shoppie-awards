import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Loading from "./Loading";
import Snackbar from "../Snackbar";
import Header from "../Header";


const API_KEY = process.env.REACT_APP_OMDB_KEY;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.4;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100vh;
`;

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

  async function getMovie(objectsToGet) {
    let movieArray = [];
    await Promise.all(
      objectsToGet.map((movie) =>
        axios
          .get(
            `http://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=cd3ba34b`
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
      loading: true,
    });

    axios
      .get(
        `http://www.omdbapi.com/?s=${search.term}&type=movie&apikey=${API_KEY}`
      )
      .then((response) => {
        if (!response.data.Search) {
          setSearch((search) => ({
            ...search,
            loading: false,
          }));
          return;
        }

        getMovie(response.data.Search).then((res) => {
          setSearch({
            ...search,
            results: res,
          });
        });

        setSearch((search) => ({
          ...search,
          loading: false,
        }));
      })
      .catch((error) => {
        handleError(error.message);
      });
  }, [search.term]);

  return (
    <>
      <LeftContainer>
        <Header />
        <SearchBar onSearch={(term) => setSearch({ ...search, term })} />
        <ResultsContainer>
          <Loading loading={search.loading} />
          <Results
            results={search.results}
            setMovie={props.setMovie}
            nominations={props.nominations}
          />
        </ResultsContainer>
      </LeftContainer>

      <Snackbar active={error.state} type={"danger"}>
        {error.message}
      </Snackbar>
    </>
  );
}

export default Search;
