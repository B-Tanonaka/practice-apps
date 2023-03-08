import React from "react";

const FormatList = ({ list }) => {
  return list.map(word => {
    return <p key={word.word}>{word.word}: {word.description}</p>
  })
}

export default FormatList;