import React, { useState } from "react";
import './App.css';

function App() {

  const [email,setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleForm = (e) => {
    console.log("e",email,username,password)
  }
  return (
    <form> 
    <div className="abc">
      <div className="container">
      <label ><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
      <label ><b>username</b></label>
      <input type="text" placeholder="Enter Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label ><b>Password</b></label>
      <input type="current-password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleForm}>Login</button>
      <label>
      </label>
    </div>
    </div>
    </form>
  );
}

export default App;

