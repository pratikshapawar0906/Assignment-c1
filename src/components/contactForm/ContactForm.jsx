import React from "react";

const ContactForm = () => {
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
  
                <form className="contact-form">
                  <div className="form1">
                    {/* Left Column */}
                    <div className="form-row1">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" />
                      </div>
        
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" placeholder="Enter your Number"/>
                      </div>
        
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your Email"/>
                      </div>
                    </div>
        
                    {/* Right Column */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Enter your Message" rows="8" ></textarea>
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
