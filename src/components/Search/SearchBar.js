import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const StyledForm = styled.form`
  display: flex;
  align-self: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 35vw;
  border: solid 1px #474747;
  border-radius: 20px;
  min-height: 2.5rem;
  margin-bottom: 2rem;
`;

const StyledSearchBar = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #1d1e1f;
  color: #fff;
`;

function SearchBar(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handle = setTimeout(() => {
      props.onSearch(value.trim());
    }, 400);
    return () => {
      clearTimeout(handle);
    };
  }, [value]);

  return (
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <SearchIcon fontSize="small"/>
        <StyledSearchBar
          type="text"
          spellCheck="false"
          placeholder="Search by title..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </StyledForm>
  );
}

export default SearchBar;
