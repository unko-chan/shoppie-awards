import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../styles/Search.scss";
import "../../styles/Results.scss";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Loading from "./Loading";

const API_KEY = process.env.REACT_APP_OMDB_KEY;

function Search(props) {
  const [search, setSearch] = useState({
    term: "",
    results: [],
    loading: false,
  });

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
    </div>
  );
}

export default Search;
