import React, { useState } from "react";
import Axios from 'axios'

const ContactForm = () => {
  const [Contact, setContact] = useState({username: '',useremail: '',userphone:'',message:''});
  
   // ******************************************
   
   const ContactHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const coypContactInfo = ({ ...Contact, [name]: value });
    setSignUpData(coypContactInfo)
  };


 // *******************************************
 const saveForm = async(e) => {
   e.preventDefault();
    
   const { name, email, phone, message}=signUpData
      if(!name || !email || !phone || !message){
           return handleError('Name , email,phone and message are required ')
      }
      try{
         const url="http://localhost:7000/user/contact"
         const responsive = await fetch(url,{
           method:"POST",
           headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({ name, email,phone, message  })
         })
         const result=await Response.json()
         console.log(result)
      }catch(error){
       handleError(error)
      }
    
      


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
                        <input type="text" name="username" placeholder="Enter your name" value={Contact.username} onChange={(e)=>ContactHandler(e)} required />
                      </div>
        
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="userphone" placeholder="Enter your Number" value={Contact.userphone} onChange={(e)=>ContactHandler(e)} required/>
                      </div>
        
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="useremail" placeholder="Enter your Email" value={Contact.useremail} onChange={(e)=>ContactHandler(e)} required/>
                      </div>
                    </div>
        
                    {/* Right Column */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Enter your Message" rows="8" value={Contact.message} onChange={(e)=>ContactHandler(e)} required></textarea>
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
