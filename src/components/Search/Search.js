import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "../../styles/Search.scss";
import SearchBar from "./SearchBar";
import Results from "./Results";

const API_KEY = process.env.REACT_APP_OMDB_KEY;

function Search(props) {
  const [search, setSearch] = useState({
    term: "",
    results: [],
    loading: false,
  });

  const prev = useRef("");

  useEffect(() => {
    if (prev.current === "" && search.term === "") return;

    setSearch((prev) => ({
      ...prev,
      loading: true,
    }));

    prev.current = search.term;

    axios
      .get(`http://www.omdbapi.com/?s=${search.term}&apikey=${API_KEY}`)
      .then((response) => {
          console.log('get')
        setSearch((search) => ({
          ...search,
          results: response.data.Search,
          loading: false,
        }));
      });
  }, [search.term]);

  return (
    <div className="Search">
      <SearchBar onSearch={(term) => setSearch({ ...search, term })} />
      {/* <Results results={search.results}/> */}
    </div>
  );
}

export default Search;
