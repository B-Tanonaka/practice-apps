import react, { useState } from "react";

const F1Form = ({ F1, setF1 }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    let {name, value} = e.target;
    // console.log('name: ', name)
    // console.log('value: ', value)
    e.preventDefault();
    // console.log('username: ', username)
    // console.log('email: ', email)
    // console.log('password: ', password)
    // let newF1 = {...F1, [name]: value}
    // setF1(newF1);
    console.log('handleClickF1:', F1);
  }

  return (
    <div>
      <div>
        <h4>Name</h4>
        <input name={name} type="text" value={F1.name} onChange={e => setF1({...F1, name: e.target.value})} />
      </div>
      <div>
        <h4>Email</h4>
        <input name={email} value={F1.email} onChange={e => setF1({...F1, email: e.target.value})} />
      </div>
      <div>
        <h4>Password</h4>
        <input name={password} type="text" value={F1.password} onChange={e => setF1({...F1, password: e.target.value})} />
      </div>
      <button onClick={handleClick}>Next</button>
    </div>

  )

}

export default F1Form;