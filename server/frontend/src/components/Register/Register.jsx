import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png";
import user_icon_firstname from "../assets/person.png";
import user_icon_lastname from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="register_container">
      <div className="header">
        <span className="text" style={{ fontWeight: "bold" }}>Sign Up</span>
        <div style={{ display: "flex", flexDirection: "row", float: "right" }}>
          <a href="/" onClick={() => { gohome() }} style={{ cursor: "pointer", textDecoration: "none" }}>
            <img style={{ width: "1cm" }} src={close_icon} alt="X" />
          </a>
        </div>
        <hr />
      </div>

      <form onSubmit={register}>
        <div className="inputs">
          {/* Field 1: Username */}
          <div className="input">
            <img src={user_icon} className="img_icon" alt="Username" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input_field"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          {/* Field 2: First Name */}
          <div className="input">
            <img src={user_icon_firstname} className="img_icon" alt="First Name" />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input_field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Field 3: Last Name */}
          <div className="input">
            <img src={user_icon_lastname} className="img_icon" alt="Last Name" />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input_field"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Field 4: Email */}
          <div className="input">
            <img src={email_icon} className="img_icon" alt="Email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Field 5: Password */}
          <div className="input">
            <img src={password_icon} className="img_icon" alt="Password" />
            <input
              name="psw"
              type="password"
              placeholder="Password"
              className="input_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="submit_panel">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
