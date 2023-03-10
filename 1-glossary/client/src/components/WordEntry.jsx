import React, { useState } from "react";
const axios = require("axios").default;

const WordEntry = ({ word, index, editable, setEditable, setList, setAllWords }) => {


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    e.preventDefault();
    const editInput = index && name ? {...word, [name]: value} : word;
    axios.put('/words', editInput)
    .then(() => {
      return axios.get('/words')
      .then(response => {
        setList(response.data);
        setAllWords(response.data);
      })
    })
  }

    if (index === editable) {
      return (
      <div index={index}>
        <input name="word" value={word.word} onChange={(e) => handleChange(e, index)}/>
        <input name="description" value={word.description} onChange={(e) => handleChange(e, index)}/>
        <button onClick={() => setEditable(null)}>Edit</button>
      </div>)

    } else {
      return (
      <div index={index}>
        <span name="word" value={word.word} onChange={(e) => handleChange(e, index)}>{word.word}:
          </span>
        <span name="description" value={word.description} onChange={(e) => handleChange(e, index)}> {word.description}
          </span>
        <button onClick={() => setEditable(index)}>Edit</button>
      </div>)
    }
}

export default WordEntry;

{/* <p key={word.word}>{word.word}: {word.description}</p> */}