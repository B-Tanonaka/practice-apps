import React from "react";

const WordEntry = ({ word }) => {
    return <p key={word.word}>{word.word}: {word.description}</p>
}

export default WordEntry;