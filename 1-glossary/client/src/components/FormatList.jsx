import React from "react";
import WordEntry from './WordEntry.jsx'

const FormatList = ({ list, editable, setEditable, setList, setAllWords }) => {
  return (
  <div>
  {list.map((word, index) => <WordEntry key={index} index={index} word={word} editable={editable} setList={setList} setAllWords={setAllWords} list={list} setEditable={setEditable}/>)}
  </div>
  )
}

export default FormatList;