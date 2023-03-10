import React from "react";
import WordEntry from './WordEntry.jsx'

const FormatList = ({ list, editable, setEditable }) => {
  return (
  <div>
  {list.map((word, index) => <WordEntry key={index} index={index} word={word} editable={editable} setEditable={setEditable}/>)}
  </div>
  )
}

export default FormatList;