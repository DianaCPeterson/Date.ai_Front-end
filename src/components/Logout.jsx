

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

function Logout({ setUser }) {

  function handleLogout(){
    setUser("")
  }
  return (
    <div onClick={handleLogout}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setUser={setUser} />}
        />

        <Route
          exact
          path="/signup"
          element={<Signup setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default Logout;