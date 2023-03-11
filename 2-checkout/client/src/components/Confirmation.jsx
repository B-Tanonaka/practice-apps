import react, { useState } from "react";

const Confirmation = ({ setShowF3, confirm, setConfirm, totalForm, setTotalForm }) => {

  const handleNext = (e) => {
    e.preventDefault();
  }

  const handleBack = (e) => {
    e.preventDefault();
    setShowF3(true);
    setConfirm(false);
  }

  if (confirm) {

  return (
    <div>
      <div>{totalForm}</div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Purchase</button>
    </div>
    )
  }
  return null;
}

export default Confirmation;