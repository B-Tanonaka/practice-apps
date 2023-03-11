import react, { useState } from 'react';
import axios from 'axios';
import FormatInfo from './FormatInfo.jsx'
import F1Form from './F1Form.jsx'
import F2Form from './F2Form.jsx'
import F3Form from './F3Form.jsx'
import Confirmation from './Confirmation.jsx'

const App = () => {

  const [totalForm, setTotalForm] = useState({});
  const [F1, setF1] = useState({});
  const [F2, setF2] = useState({});
  const [F3, setF3] = useState({});

  const getEntry = () => {
    axios.get('/checkout')
    .then(data => {setTotalForm(data)})
    .catch(err => console.log(err))
  }

  const addEntry = (totalForm) => {
    axios.post('/checkout')
    .catch(err => console.log(err))
  }

  const editEntry = (totalForm) => {
    getEntry()
    .then(axios.patch('/checkout'))
    .catch(err => console.log(err))
  }

  const deleteEntry = (totalForm) => {
    axios.delete('/checkout', {data: totalForm})
    .catch(err => console.log(err))
  }


  return (
    <div>
      <F1 />
      <F2 />
      <F3 />
    </div>
  )
}

export default App;