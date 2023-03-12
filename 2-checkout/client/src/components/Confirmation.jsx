import react, { useState } from "react";

const Confirmation = ({ setShowF1, setShowF3, confirm, setConfirm, totalForm, setTotalForm, addEntry, deleteEntry }) => {

  const handleNext = (e) => {
    e.preventDefault();
    addEntry(totalForm);
    setConfirm(false);
    setComplete(true);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setConfirm(false);
    setShowF3(true);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setConfirm(false);
    setComplete(false);
    setCancelOrder(true);
    deleteEntry(totalForm);
  }

  const startOver = (e) => {
    e.preventDefault();
    setCancelOrder(false);
    setShowF1(true);
    console.log('totalFormStartOver: ', totalForm);
  }

  if (confirm) {

  return (
    <div>
      <h2>Confirm Purchase</h2>
      <p><b>Name:</b> {totalForm.name}</p>
      <p><b>Email:</b> {totalForm.email}</p>
      <p><b>Password:</b> {totalForm.password}</p>
      <p><b>Address Line-1:</b> {totalForm.address_1}</p>
      <p><b>Address Line-2:</b> {totalForm.address_2}</p>
      <p><b>City:</b> {totalForm.city}</p>
      <p><b>State:</b> {totalForm.state}</p>
      <p><b>Zipcode:</b> {totalForm.zipcode}</p>
      <p><b>Credit Card:</b> {totalForm.credit_card}</p>
      <p><b>Expiration date:</b> {totalForm.expiry_date}</p>
      <p><b>CVV:</b> {totalForm.cvv}</p>
      <p><b>Billing Zipcode:</b> {totalForm.billing_zip}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Purchase</button>
    </div>
    )
  }
  if (complete && !confirm) {
    return (
    <div>
      <h2>Thank you for your purchase!</h2>
      <button onClick={handleDelete}>Cancel order</button>
    </div>
    )
  }

  if (cancelOrder) {
    return (
      <div>
        <h5>Your order has been cancelled</h5>
        <button onClick={startOver}>Start over</button>
      </div>
    )
  }

  return null;
}

export default Confirmation;

