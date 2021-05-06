import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../styles/Search.scss";
import "../../styles/Results.scss";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Loading from "./Loading";
import Snackbar from "../Snackbar";

const API_KEY = process.env.REACT_APP_OMDB_KEY;

function Search(props) {
  const [search, setSearch] = useState({
    term: "",
    results: [],
    loading: false,
  });

  const [error, setError] = useState({state: false});

  function handleError(message) {
    setSearch({
      term: "",
      results: [],
      loading: false,
    });

    setError({state: true, message});
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
        console.log("data", response.data.Search);

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
    <div className="search">
      <SearchBar onSearch={(term) => setSearch({ ...search, term })} />
      <Loading loading={search.loading} />
      <Results
        results={search.results}
        setMovie={props.setMovie}
        nominations={props.nominations}
      />
      <Snackbar active={error.state} type={"danger"}>{error.message}</Snackbar>
    </div>
  );
}

export default Search;
