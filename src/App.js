import './App.css';
import { useState } from 'react';

function App() {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [conPassword,setConPassword] = useState("");
  let [message,setMessage] = useState("");
  let [success,setSuccess] = useState(false);

  let validation = ()=>{
    if(name===""||email===""||password===""||conPassword===""){
      setMessage("Error: All the fields are mandatory");
      setSuccess(false);
    }
    else if(password != conPassword){
      setMessage("Password mismatch")
      setSuccess(false);
    }
    else{
      setSuccess(true);
      setMessage("Successfully Signed Up!")
    }
    console.log(success); 
  }

  return (
    <div className="App">
      <h1>Signup</h1>
      <div id="input">
        <label for="name">Full Name</label>
        <input type='text' id='name' onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div id="input">
        <label for="email">Email</label>
        <input type='email' id='email' onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div id="input">
        <label for="password">Password</label>
        <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div id="input">
        <label for="con-password">Confirm Password</label>
        <input type='password' id='con-password' onChange={(e)=>setConPassword(e.target.value)}></input>
      </div>

      <p style={{color:success?'green':'red'}}>{message}</p>
      <button onClick={validation}>Signup</button>
    </div>
  );
}

export default App;