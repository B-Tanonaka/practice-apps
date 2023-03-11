import react, { useState } from "react";

const F3Form = ({ F3, setF3, setShowF2, showF3, setShowF3 }) => {

  const handleNext = (e) => {
    e.preventDefault();
    setShowF2(false);
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
        <input name="credit_card" type="text" value={F3.credit_card} onChange={e => setF3({...F3, credit_card: e.target.value})} />
      </div>
      <div>
        <h4>Expiry Date</h4>
        <input name="expiry_date" value={F3.expiry_date} onChange={e => setF3({...F3, expiry_date: e.target.value})} />
      </div>
      <span>
        <h4>CVV</h4>
        <input name="cvv" type="text" value={F3.cvv} onChange={e => setF3({...F3, cvv: e.target.value})} />
      </span>
      <div>
        <h4>Billing Zipcode</h4>
        <input name="billing_zip" type="text" value={F3.billing_zip} onChange={e => setF3({...F3, billing_zip: e.target.value})} />
      </div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
    )
  }
  return null;
}

export default F3Form;