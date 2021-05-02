import React, {useState} from "react";

import useDebounce from '../../hooks/useDebounce'

function SearchBar(props) {
    const [value, setValue] = useState("")

    useDebounce(() => props.setInput(value), 300);

  return (
    <div className="SearchBar">
      <form>
        <input 
        type="text"
        spellCheck="false"
        placeholder="Search by title"
        value={value}
        onChange={event => setValue(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
