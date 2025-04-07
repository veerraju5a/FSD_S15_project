import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7070/user/login", { email, password });
      console.log("token"+response.data.token);
      if(response.data.token){
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    }
      console.log(response.data.token);
      // if (response.data.message === "Login successful") {
      //   alert("Login successful!");
      //   //localStorage.setItem("user", email);
      //   setError("");
      // } else {
      //   setError("Invalid credentials!");
      // }
    } catch (error) {
      alert("Invalid credentials!");
      console.log("Error logging in", error);
    }
  };

  return (
    <div className="container1">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        If you are not Registered <Link to='/registration'>Registration</Link>
      </form>
    </div>
  );
};

export default Login;
