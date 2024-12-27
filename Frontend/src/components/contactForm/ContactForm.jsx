import React, { useState } from "react";
import Axios from 'axios'

const ContactForm = () => {
  const [data, setdata] = useState({username: '',useremail: '',userphone:'',message:''});
  
   // ******************************************
   const [errors, setErrors] = useState({});

   const dataHandler = (e) => {
       const { name, value} = e.target;

         setdata({ ...data, [name]: value });

 };


 // *******************************************
 const saveForm = async(e) => {
   e.preventDefault();

    
       alert('Form submitted successfully!');
       console.log(data);
       setdata({username: '',useremail: '',userphone:'',message:''});
       setErrors({});
   
   await Axios.post('http://localhost:3000/customer',data)
 };

  return (
    <>
    <div className="container-fluid" id="Contact" style={{width:'1440px', height:'900px', marginTop:'30px'}}>
        <div className="col-md-12">
            <div className="row">
              <div className="Frame-878">
                <div className="Frame-342">
                  <h2 className="H400-bold">Connect with Our Digital Marketing Experts</h2>
                  <p className="Body500-RG">
                    Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
                    Elevate Your Online Presence Together.
                  </p>
                </div>
  
                <form className="contact-form" onSubmit={(e)=>saveForm(e)} >
                  <div className="form1">
                    {/* Left Column */}
                    <div className="form-row1">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="username" placeholder="Enter your name" value={data.username} onChange={(e)=>dataHandler(e)} required />
                      </div>
        
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="userphone" placeholder="Enter your Number" value={data.userphone} onChange={(e)=>dataHandler(e)} required/>
                      </div>
        
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="useremail" placeholder="Enter your Email" value={data.useremail} onChange={(e)=>dataHandler(e)} required/>
                      </div>
                    </div>
        
                    {/* Right Column */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Enter your Message" rows="8" value={data.message} onChange={(e)=>dataHandler(e)} required></textarea>
                      </div>
                    </div>
                  </div>
  
                  {/* Submit Button */}
                  <button type="submit" className="submit-button">
                    Get started
                  </button>
                 </form>
  
              </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default ContactForm;
