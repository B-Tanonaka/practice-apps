import React, { useState } from "react";
const axios = require("axios").default;

const AddWords = ({ list, setList, setAllWords }) => {

  const wordBase = {
    word: '',
    description: ''
  }

  const [entry, setEntry] = useState(wordBase);

  const handleInput = (e) => {
    e.preventDefault();
    setEntry({...entry, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list];
    axios.post('/words', {
      word: entry.word,
      description: entry.description
    }).then(() => {
      return axios.get('/words')
      .then(response => {
        setList(response.data);
        setAllWords(response.data);
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="word" value={entry.word} placeholder="Word" onChange={handleInput}/>
      <input name="description" value={entry.description} placeholder="Description" onChange={handleInput}/>
      <button>Submit</button>
    </form>
  )

};

export default AddWords;


















// import React, { useState } from "react";

// const AddWords = ({ list, setList }) => {

//   let individualWord = {
//     word: '',
//     description: '',
//   }
//   const [entry, setEntry] = useState(individualWord);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newList = [...list];
//     newList.push(entry);
//     setList(newList);
//   }

//   const handleInput = (e) => {
//     e.preventDefault();
//     setEntry({...entry, [e.target.name]: e.target.value})
// }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="word" value={entry.name} placeholder="Word" onChange={handleInput}/>
//       <input name="description" value={entry.description} placeholder="Description" onChange={handleInput}/>
//       <button>Submit</button>
//     </form>
//   )

// };

// export default AddWords;