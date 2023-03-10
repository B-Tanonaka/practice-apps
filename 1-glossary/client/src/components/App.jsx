import React from "react";
import { useState, useEffect } from "react";
import AddWords from "./AddWords.jsx";
import FormatList from "./FormatList.jsx";
import sampleData from "./sampleData.js";
import Search from "./Search.jsx"
const axios = require('axios').default;


const App = () => {

  const [list, setList] = useState([]);
  const [allWords, setAllWords] = useState(list);
  const [search, setSearch] = useState('');
  const [editable, setEditable] = useState(null);

  useEffect(() => {
    axios.get('/words')
    .then(({data}) => {
      setList(data);
    })
  }, [])

return (
    <div>
    <h1>Glossary</h1>
    <AddWords list={list} setList={setList} setAllWords={setAllWords}/>
    <Search list={list} setList={setList} allWords={allWords}/>
    <FormatList list={list} editable={editable} setEditable={setEditable} />
    </div>
  )
}

export default App;