import { useState } from "react";
import {useNavigate} from "react-router-dom";


export function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

const navigate = useNavigate();
  const logIn =(e)=>{
    e.preventDefault()

    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email": email, "password": password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        navigate("/profile")
      })
    }
 console.log(email)
 console.log(password)  
//  console.log(setUser("hey"))  
  return (
    <div>
      <form>
        <h1 className="create-title">Login</h1>
        <div>
        <label classname="top"
        htmlFor="email" className="input-caption">Email: </label>
        <input className="input"
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
        <label htmlFor="password" className="input-caption" >Password: </label>
        <input className="input"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)
          console.log(e.target.value)}}
        />
        <button  onClick={logIn} type="submit" className="postBtn">Login</button>
        </div> 
        </form>
    </div>
  );
}

export default Login;