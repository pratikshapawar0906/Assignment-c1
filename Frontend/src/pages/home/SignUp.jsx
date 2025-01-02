import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../util";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = signUpData;

    // Validate required fields
    if (!name || !email || !password || !confirmPassword) {
      return handleError("Name, Email, Password, and Confirm Password are required.");
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return handleError("Passwords do not match!");
    }

    try {
      const url = "http://localhost:7000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      
      const result = await response.json();
      const { success, message} = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }else if(success){
        handleError(message ); 
      }

      console.log(result);
    } catch (error) {

      handleError("An error occurred while signing up. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input  type="text"  name="name"  placeholder="Enter your name"  value={signUpData.name}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input  type="email"  name="email"  placeholder="Enter your email"  value={signUpData.email}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input  type="password"  name="password"  placeholder="Enter your password"  value={signUpData.password}  onChange={handleChange}  required  autoComplete="new-password"/>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input  type="password"  name="confirmPassword"  placeholder="Confirm your password"  value={signUpData.confirmPassword}  onChange={handleChange}  required  autoComplete="new-password"/>
          </div>
          <button type="submit" className="btn-signup">
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
