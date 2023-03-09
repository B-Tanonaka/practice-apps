import React from "react";
import WordEntry from './WordEntry.jsx'

const FormatList = ({ list }) => {
  return (
  <div>
  {list.map((word, index) => <WordEntry key={index} word={word}/>)}
  </div>
  )
}

export default FormatList;