import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Ai from "./components/Ai";
import { useEffect, React } from "react";
import { useState} from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Logout from "./components/Logout";
import Matches from "./components/Matches";
import Video from "./components/Video";
import ProfileCards from "./components/ProfileCards";
import { BrowserRouter } from "react-router-dom";

function App() {

  const [user, setUser] = useState("")

  useEffect(() =>{
    fetch('/me')
    .then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user))
        }
    });
},[]);
 

  return (
    <>
    { user === "" ? <Navbar /> : <Navbar2/>
    }
      <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser}/>} />
        <Route path="/about" element={<About user={user} setUser={setUser}/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser}/>} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
        <Route path="/ai" element={<Ai user={user} setUser={setUser}/>} />
        <Route path="/logout" element={<Logout user={user} setUser={setUser}/>}/>
        <Route path="/matches" element={<Matches user={user} setUser={setUser}/>}/>
        <Route path="/video" element={<Video user={user} setUser={setUser}/>}/>
        <Route path="/profilecards" element={<ProfileCards user={user} setUser={setUser}/>}/>
        </Routes>
    </>
  )
}

export default App