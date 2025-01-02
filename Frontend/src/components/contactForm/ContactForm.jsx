import React, { useState } from "react";
import Axios from 'axios'
import { handleError } from "../../util";
import { ToastContainer , toast } from "react-toastify";

const ContactForm = () => {
  const [Contact, setContact] = useState({username: '',useremail: '',userphone:'',message:''});
  
   // ******************************************
   
   const ContactHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const coypContactInfo = ({ ...Contact, [name]: value });
    setContact(coypContactInfo)
  };


 // *******************************************
 const saveForm = async(e) => {
   e.preventDefault();
    
   const { username, useremail, userphone, message}= Contact

      if(!username || !useremail || !userphone || !message){
           return handleError('Name , email,phone and message are required ')
      }
      try{
         const url="http://localhost:7000/user/contact"
         const response = await fetch(url,{
           method:"POST",
           headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({  name: username, email: useremail, phone: userphone, message   })
         })
         const result=await response.json()
         const { success, message}=result

          if (success) {
             handleSuccess(message);
          }
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
  
                <form className="contact-form" onSubmit={saveForm} >
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
               <ToastContainer/>
              </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default ContactForm;
