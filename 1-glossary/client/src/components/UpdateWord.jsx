import React from "react";


const UpdateWord = ({ list, setList }) => {

  const handleInputChange = (e, id) => {
    let editedInput = list.map(word => {
      word.id === id && e.target.name ? {...word, [e.target.name]: e.target.value } : word;
    })
  }

  setList(editedInput);
}

export default UpdateWord;