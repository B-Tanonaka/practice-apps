import react, { useState } from "react";

const Confirmation = ({ F1, F2, F3, setShowF3, confirm, setConfirm, totalForm, setTotalForm }) => {

  const allData = () => {
    setTotalForm({...totalForm, [name]: value})
  }

  const handleNext = (e) => {
    e.preventDefault();
    setConfirm(false);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setShowF3(true);
    setConfirm(false);
  }

  if (confirm) {

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Purchase</button>
    </div>
    )
  }
  return null;
}

export default Confirmation;