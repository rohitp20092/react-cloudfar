import React, { useEffect, useState } from "react";
import axios from "axios";
const Home=()=>{


    const [email,setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    const handleForm = (e) => {
      console.log("e",email,username,password)
    
  
    }
    
  const getIpAddress=async ()=>{
  const res= await axios.get('https://geolocation-db.com/json/')
  console.log(res,"response response response")
  
  }
  
  useEffect(()=>{
    getIpAddress();
  },[])

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
    )
}

export default Home;