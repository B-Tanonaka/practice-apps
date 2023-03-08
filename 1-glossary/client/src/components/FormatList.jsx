import React from "react";

const FormatList = ({ list }) => {

  let listItems = list.map(word => {
    return <li key={word.word}>{word.word}: {word.description}</li>
  })
}

export default FormatList;