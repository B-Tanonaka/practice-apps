import React, { useState } from "react";

const AddWords = ({ list, setList }) => {

  let individualWord = {
    word: '',
    description: '',
  }
  const [entry, setEntry] = useState(individualWord);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list];
    newList.push(entry);
    setList(newList);

  }

  const handleInput = (e) => {
    e.preventDefault();
    setEntry({...entry, [e.target.name]: e.target.value})
}

  return (
    <form onSubmit={handleSubmit}>
      <input name="word" value={entry.name} placeholder="Word" onChange={handleInput}/>
      <input name="description" value={entry.description} placeholder="Description" onChange={handleInput}/>
      <button>Submit</button>
    </form>
  )

};

export default AddWords;