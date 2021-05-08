import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Loading from "./Loading";
import Snackbar from "../Snackbar";

const API_KEY = process.env.REACT_APP_OMDB_KEY;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid green 3px;
  flex: 1.4;
`;

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-gap: 1rem;
  justify-items: center;
  justify-content: center;
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
      .get(`http://www.omdbapi.com/?s=${search.term}&apikey=${API_KEY}`)
      .then((response) => {
        setSearch((search) => ({
          ...search,
          results: response.data.Search,
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
