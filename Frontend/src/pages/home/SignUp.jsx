import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input  type="text"  name="name"  placeholder="Enter your name"  value={formData.name}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input  type="email"  name="email"  placeholder="Enter your email"  value={formData.email}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input  type="password"  name="password"  placeholder="Enter your password"  value={formData.password}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input  type="password"  name="confirmPassword"  placeholder="Confirm your password"  value={formData.confirmPassword}  onChange={handleChange}  required/>
          </div>
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
