import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { handleError } from "../../util";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({name: "",email: "",password: "",confirmPassword: "",});
  // ******************************************************

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const coypsignupInfo = ({ ...signUpData, [name]: value });
    setSignUpData(coypsignupInfo)
  };

  // ******************************************************
  
  const handleSubmit =async (e) => {
    e.preventDefault();
    
   const { name, email, password, confirmPassword}=signUpData
   if(!name || !email || !password ||!confirmPassword){
        return handleError('Name , email, Password and Confrimpassword are required ')
   }
   try{
      const url="http://localhost:7000/auth/signup"
      const responsive = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, confirmPassword })
      })
      const result=await Response.json()
      console.log(result)
   }catch(error){
    handleError(error)
   }

    // Check if passwords match
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Sign-Up Data:",signUpData);

    // Make an API request or handle data submission here
    // For example, sending data to the backend
    // axios.post('/signup', formData).then(response => {
    //     console.log(response.data);
    // }).catch(error => {
    //     console.error(error);
    // });

    alert("Sign-up successful!");
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
          <button type="submit" className="btn-signup">Sign Up</button>
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
