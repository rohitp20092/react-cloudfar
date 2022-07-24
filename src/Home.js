import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ipAddress, setApiAddress] = useState("");

console.log(email.split("#"),"email")
console.log(username,"username")
console.log(password,"pass")




  const handleForm = async (e) => {
      e.preventDefault()
    const data = {email:email,username: username ,password:password,ipAdd:ipAddress?ipAddress:""};
    console.log(data,"ip")
    const res = await axios.post("http://localhost:8443/user",data);
        setUsername("")
        setEmail("")
        setPassword("")
    
  };

  const getIpAddress = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setApiAddress(res.data.IPv4);
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  return (
    <form>
      <div className="abc">
        <div className="container">
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            <b>username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleForm}>
            Login
          </button>
          <label></label>
        </div>
      </div>
    </form>
  );
};

export default Home;
