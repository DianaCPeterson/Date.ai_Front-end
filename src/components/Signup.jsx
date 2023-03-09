// import { useState } from "react";


// export function Signup({ user, setUser }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [first, setFirst] = useState("");
//   const [last, setLast] = useState("");
//   const [handle, setHandle] = useState("");



//   // const [password, setPassword] = useState("");
//   // const [passwordConfirmation, setPasswordConfirmation] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/signups", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         first_name: first,
//         last_name: last,
//         handle
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));

//       }
//     })
//   }


//   return (
//     <>
//     <h1 className="create-title">Sign Up</h1>
//     <div className="signup">
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email" className="input-caption">Email: </label>
//         <input className="input"
//           type="text"
//           id="email"
//           autoComplete="off"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label htmlFor="password" className="input-caption">Password: </label>
//         <input className="input"
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
//         <br />
//         <label htmlFor="password" className="input-caption">Password Confirmation: </label>
//         <input className="input"
//           type="password"
//           id="password_confirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           autoComplete="current-password"
//         />
//         <br />
//         <br />

      
//         <label htmlFor="first" className="input-caption">First Name: </label>
//         <input className="input"
//           type="text"
//           id="first"
//           autoComplete="off"
//           value={first}
//           onChange={(e) => setFirst(e.target.value)}
//         />
//         <br />

//         <label htmlFor="last" className="input-caption">Last Name: </label>
//         <input className="input"
//           type="text"
//           id="last"
//           autoComplete="off"
//           value={last}
//           onChange={(e) => setLast(e.target.value)}
//         />
//         <br />

//         <label htmlFor="handle" className="input-caption">Creative Social Media Handle: </label>
//         <input className="input"
//           type="text"
//           id="handle"
//           autoComplete="off"
//           value={handle}
//           onChange={(e) => setHandle(e.target.value)}
//         />
//         <br />
//         <button type="submit" className="postBtn">Sign Up</button>
//       </form>
//     </div>
//     </>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function SignupForm({ setUser }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    handle: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/users", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setUser(user);
          navigate("/profile")
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label htmlFor="first_name">First Name </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="last_name">Last Name </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="handle">Handle </label>
          <input
            type="handle"
            name="handle"
            value={formData.handle}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
        <p>Have an account?</p>
        <p>
          <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;