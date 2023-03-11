import react, { useState } from "react";

const F1Form = ({ totalForm, setTotalForm, showF1, showF2, setShowF1, setShowF2 }) => {

  const handleNext = (e) => {
    e.preventDefault();
    setShowF1(false);
    setShowF2(true);
  }

  if (showF1) {

  return (
    <div>
      <div>
        <h4>Name</h4>
        <input name="name" type="text" value={totalForm.name} onChange={e => setTotalForm({...totalForm, name: e.target.value})} />
      </div>
      <div>
        <h4>Email</h4>
        <input name="email" value={totalForm.email} onChange={e => setTotalForm({...totalForm, email: e.target.value})} />
      </div>
      <div>
        <h4>Password</h4>
        <input name="password" type="text" value={totalForm.password} onChange={e => setTotalForm({...totalForm, password: e.target.value})} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
    )
  }
  return null;
}

export default F1Form;