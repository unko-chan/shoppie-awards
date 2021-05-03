import React, { useState, useEffect } from "react";

function SearchBar(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handle = setTimeout(() => {
      props.onSearch(value);
    }, 400)
    return () => clearTimeout(handle);
  }, [value]);

  return (
    <div className="SearchBar">
      <form onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          spellCheck="false"
          placeholder="Search by title"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
