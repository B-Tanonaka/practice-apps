import react, { useState } from "react";

const F2Form = ({ totalForm, setTotalForm, showF2, setShowF1, setShowF2, setShowF3 }) => {

  const handleNext = (e) => {
    e.preventDefault();
    setShowF2(false);
    setShowF3(true);

  }

  const handleBack = (e) => {
    e.preventDefault();
    setShowF2(false);
    setShowF1(true);
  }

  if (showF2) {

  return (
    <div>
      <div>
        <h4>Address - Line 1</h4>
        <input name="address1" type="text" value={totalForm.address1} onChange={e => setTotalForm({...totalForm, address_1: e.target.value})} />
      </div>
      <div>
        <h4>Address - Line 2</h4>
        <input name="address2" value={totalForm.address2} onChange={e => setTotalForm({...totalForm, address_2: e.target.value})} />
      </div>
      <span>
        <h4>City</h4>
        <input name="city" type="text" value={totalForm.city} onChange={e => setTotalForm({...totalForm, city: e.target.value})} />
      </span>
      <span>
        <h4>State</h4>
        <input name="state" type="text" value={totalForm.state} onChange={e => setTotalForm({...totalForm, state: e.target.value})} />
      </span>
      <div>
        <h4>Zip Code</h4>
        <input name="zipcode" type="text" value={totalForm.zipcode} onChange={e => setTotalForm({...totalForm, zipcode: e.target.value})} />
      </div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
    )
  }
  return null;
}

export default F2Form;