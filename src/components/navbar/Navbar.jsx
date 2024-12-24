import React from "react";

const Navbar = () => {
  return (
    <>
       <nav className="Navbar navbar-expand-lg navbar-light sticky-top">
          <div className="container-fluid header" >
             <div className="nav-nav  ">
                <div className="logo">
                   <img src='../images/Brand-logo.png' alt="Brandlogo" height={150} width={172}/>
                </div>
                <div className="contact-us">
                   <a href="#contactus" className="Body200-bold" >Contact us</a>
                </div>
             </div>
          </div>
       </nav>
    </>
  )
};

export default Navbar;
