import react, { useState } from 'react';
import axios from 'axios';
import FormatInfo from './FormatInfo.jsx'
import F1Form from './F1Form.jsx'
import F2Form from './F2Form.jsx'
import F3Form from './F3Form.jsx'
import Confirmation from './Confirmation.jsx'

const App = () => {

  const totalFormDefault = {
    name: '',
    email: '',
    password: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zipcode: '',
    credit_card: '',
    expiry_date: '',
    cvv: '',
    billing_zip: '',
  }

  const [totalForm, setTotalForm] = useState(totalFormDefault);
  const [showF1, setShowF1] = useState(true);
  const [showF2, setShowF2] = useState(false);
  const [showF3, setShowF3] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [complete, setComplete] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);

  const getEntry = () => {
    axios.get('/checkout')
    .then(data => {setTotalForm(data)})
    .catch(err => console.log(err))
  }

  const addEntry = (totalForm) => {
    axios.post('/checkout', totalForm)
    .catch(err => console.log(err))
  }

  const editEntry = (totalForm) => {
    getEntry()
    .then(axios.patch('/checkout', totalForm))
    .catch(err => console.log(err))
  }

  const deleteEntry = (totalForm) => {
    axios.delete('/checkout', {data: totalForm})
    .catch(err => console.log(err))
  }

  const sendToHome = (e) => {
    e.preventDefault();
    setShowF1(true);
    setShowF2(false);
    setShowF3(false);
    setCancelOrder(false);
    setComplete(false);
    setConfirm(false);
  }


  return (
    <div>
      <h1 onClick={sendToHome}>Checkout</h1>
      <F1Form totalForm={totalForm} setTotalForm={setTotalForm} showF1={showF1} setShowF1={setShowF1} showF2={showF2} setShowF2={setShowF2}/>
      <F2Form totalForm={totalForm} setTotalForm={setTotalForm} setShowF1={setShowF1} showF2={showF2}  setShowF2={setShowF2} showF3={showF3} setShowF3={setShowF3}/>
      <F3Form totalForm={totalForm} setTotalForm={setTotalForm} setShowF2={setShowF2} showF3={showF3} setShowF3={setShowF3} setConfirm={setConfirm}/>
      <Confirmation totalForm={totalForm} setTotalForm={setTotalForm} confirm={confirm} setShowF1={setShowF1} setShowF3={setShowF3} setConfirm={setConfirm} addEntry={addEntry} deleteEntry={deleteEntry} complete={complete} setComplete={setComplete} cancelOrder={cancelOrder} setCancelOrder={setCancelOrder}/>
    </div>
  )
}

export default App;