import React from "react";
import { useState } from "react";
import AddWords from "./AddWords.jsx";
import FormatList from "./FormatList.jsx";
import sampleData from "./sampleData.js";

const App = () => {

  const [list, setList] = useState(sampleData);
  const [search, setSearch] = useState('');
  console.log('list: ', list);


return (
    <div>
    <h1>Glossary</h1>
    <AddWords list={list} setList={setList} />
    <FormatList list={list} />
    </div>
  )
}

export default App;