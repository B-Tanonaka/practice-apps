import react, { useState } from "react";

const F1Form = ({ F1, setF1, showF1, showF2, setShowF1, setShowF2 }) => {

  const handleClick = (e) => {
    e.preventDefault();
    setShowF1(false);
    setShowF2(true);
  }

  if (showF1) {

  return (
    <div>
      <div>
        <h4>Name</h4>
        <input name="name" type="text" value={F1.name} onChange={e => setF1({...F1, name: e.target.value})} />
      </div>
      <div>
        <h4>Email</h4>
        <input name="email" value={F1.email} onChange={e => setF1({...F1, email: e.target.value})} />
      </div>
      <div>
        <h4>Password</h4>
        <input name="password" type="text" value={F1.password} onChange={e => setF1({...F1, password: e.target.value})} />
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
    )
  }
  return null;
}

export default F1Form;