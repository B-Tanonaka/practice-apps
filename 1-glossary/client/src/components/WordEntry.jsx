import React, { useState } from "react";
const axios = require("axios").default;

const WordEntry = ({ word, index, editable, setEditable, list, setList, setAllWords }) => {

  const [entry, setEntry] = useState(word);

  const renderPage = () => {
    return axios.get('/words')
    .then(response => {
      // console.log('response.data: ', response.data);
      setList(response.data)
      setAllWords(response.data)
    })
  }

  const handleDelete = (e, index) => {
    let newList = [...list]
    let item = newList.splice(index, 1);
    axios.delete('/words', ({data: item[0]}))
    .then(renderPage())
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    e.preventDefault();
    setEntry({...entry, [name]: value});
  }

  const handleEdit = (e, index) => {
    console.log('entry: ', entry)
    setEditable(null);
    axios.put('/words', entry)
    .then(renderPage())
  }

    if (index === editable) {
      return (
      <div index={index}>
        <input name="word" value={entry.word} onChange={(e, index) => handleChange(e, index)}/>
        <input name="description" value={entry.description} onChange={(e) => handleChange(e, index)}/>
        <button onClick={handleEdit}>Save</button>
      </div>)

    } else {
      return (
      <div index={index}>
        <span name="word" value={word.word} onChange={(e) => handleChange(e, index)}>{word.word}:
          </span>
        <span name="description" value={word.description} onChange={(e) => handleChange(e, index)}> {word.description}
          </span>
        <button onClick={() => setEditable(index)}>Edit</button>
        <button onClick={(e) => handleDelete(e, index)}>Delete</button>
      </div>)
    }
}

export default WordEntry;

{/* <p key={word.word}>{word.word}: {word.description}</p> */}