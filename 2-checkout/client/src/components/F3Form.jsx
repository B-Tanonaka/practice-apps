import react, { useState } from "react";

const F3Form = ({ totalForm, setTotalForm, setShowF2, showF3, setShowF3, setConfirm }) => {

  const handleNext = (e) => {
    e.preventDefault();
    setShowF3(false);
    setConfirm(true);
    console.log('totalFormF3: ', totalForm);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setShowF3(false);
    setShowF2(true);
  }

  if (showF3) {

  return (
    <div>
      <div>
        <h4>Credit Card</h4>
        <input name="credit_card" type="text" value={totalForm.credit_card} onChange={e => setTotalForm({...totalForm, credit_card: e.target.value})} />
      </div>
      <div>
        <h4>Expiration Date</h4>
        <input name="expiry_date" type="date" value={totalForm.expiry_date} onChange={e => setTotalForm({...totalForm, expiry_date: e.target.value})} />
      </div>
      <span>
        <h4>CVV</h4>
        <input name="cvv" type="text" value={totalForm.cvv} onChange={e => setTotalForm({...totalForm, cvv: Number(e.target.value)})} />
      </span>
      <div>
        <h4>Billing Zipcode</h4>
        <input name="billing_zip" type="text" value={totalForm.billing_zip} onChange={e => setTotalForm({...totalForm, billing_zip: Number(e.target.value)})} />
      </div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
    )
  }
  return null;
}

export default F3Form;