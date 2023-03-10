import React, { useState } from "react";

const WordEntry = ({ word, index, editable, setEditable }) => {


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    e.preventDefault();
    const editInput = index && name ? {...word, [name]: value} : word;
  }

    if (index === editable) {
      return (
      <div index={index}>
        <input name="word" value={word.word} onChange={(e) => handleChange(e, index)}/>
        <input name="description" value={word.description} onChange={(e) => handleChange(e, index)}/>
        <button>Edit</button>
      </div>)

    } else {
      return (
      <div index={index}>
        <p name="word" value={word.word} onChange={(e) => handleChange(e, index)}/>
        <p name="description" value={word.description} onChange={(e) => handleChange(e, index)}/>
        <button onClick={() => setEditable(index)}>Edit</button>
      </div>)
    }
}

export default WordEntry;

{/* <p key={word.word}>{word.word}: {word.description}</p> */}