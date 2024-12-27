import React, { useState } from "react";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="login-container" >
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input  type="email"  name="email"  placeholder="Enter your email"  value={formData.email}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input  type="password"  name="password"  placeholder="Enter your password"  value={formData.password}  onChange={handleChange}  required/>
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
