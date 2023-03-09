import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

function Search({ setString, string }) {
  const handleSearch = (e) => {
    setString(e.target.value);
  };

  return (
    <>
      <form className="form-inline">
        <button className="btn my-2 my-sm-0 btn-search" type="submit">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />|
        </button>
        <input
          type="text"
          placeholder="I am looking for"
          value={string}
          onChange={handleSearch}
          className="form-control search-input"
        />
      </form>
    </>
  );
}

export default Search;
