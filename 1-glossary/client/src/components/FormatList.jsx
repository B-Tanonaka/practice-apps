import React from "react";

const FormatList = ({ list, setList }) => {
  let listItems = list.map(word => {
    <li key={word.word}>{word.word}: {word.description}</li>
  })

  return (
    <ol>{listItems}</ol>
  )
}

export default FormatList;