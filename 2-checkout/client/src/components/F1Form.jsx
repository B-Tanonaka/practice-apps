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
    console.log('email: ', email)
    console.log('password: ', password)
    // let newF1 = {...F1, [name]: value}
    // setF1(newF1);
    console.log(F1);
  }

  return (
    <form>
      <div>
        <h4>Name</h4>
        <input name={name} type="text" value={F1.name} onChange={e => setF1({...F1, [name]: e.target.value})} />
      </div>
      <div>
        <h4>Email</h4>
        <input name={email} type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <h4>Password</h4>
        <input name={password} type="text" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onSubmit={handleClick}>Next</button>
    </form>

  )

}

export default F1Form;