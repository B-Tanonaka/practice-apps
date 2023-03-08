import React from "react";
import { render, useState } from "react-dom";
import AddWords from "./components/addWords.jsx";

const [list, setList] = useState([]);
const [search, setSearch] = useState('');

render(
  <div>
    <h1>Glossary</h1>
    <AddWords list={list} setList={setList}/>
  </div>,
  document.getElementById("root")
);
