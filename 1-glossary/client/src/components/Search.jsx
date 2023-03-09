import React, { useState } from "react";

const Search = ({ list, setList, allWords }) => {

  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    if (e.target.value=== '') {
      setList(allWords)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setList(list.filter(word => {
      if (word.word.toString().toLowerCase().includes(query)) {
        return word;
      }
    }))
  }


  return (
    <form onSubmit={handleSearch}>
      <input type="text" onChange={handleInput}/>
      <button>Search</button>
    </form>
  )
}


export default Search;