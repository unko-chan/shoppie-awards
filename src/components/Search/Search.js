import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../styles/Search.scss";
import SearchBar from "./SearchBar";

const API_KEY = process.env.REACT_APP_OMDB_KEY

function Search(props) {
  const [search, setSearch] = useState({
    term: "",
    results: [],
    loading: false,
  });

  useEffect(() => {
    if (search.term === "") return;

    setSearch((prev) => ({
      ...prev,
      loading: true,
    }));

    axios
      .get(`http://www.omdbapi.com/?s=${search.term}&apikey=${API_KEY}`)
      .then((response) => {
        console.log(response.data.Search);
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
    </div>
  );
}

export default Search;
