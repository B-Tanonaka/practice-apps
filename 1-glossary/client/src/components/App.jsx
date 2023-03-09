import React from "react";
import { useState } from "react";
import AddWords from "./AddWords.jsx";
import FormatList from "./FormatList.jsx";
import sampleData from "./sampleData.js";
import Search from "./Search.jsx"

const App = () => {

  const [list, setList] = useState(sampleData);
  const [allWords, setAllWords] = useState(list);
  const [search, setSearch] = useState('');

return (
    <div>
    <h1>Glossary</h1>
    <AddWords list={list} setList={setList} setAllWords={setAllWords}/>
    <FormatList list={list} />
    <Search list={list} setList={setList} allWords={allWords}/>
    </div>
  )
}

export default App;