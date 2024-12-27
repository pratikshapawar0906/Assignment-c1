import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-light sticky-top shadow-sm animated-navbar "  >
          <div className="container-fluid header " >
             <div className="col-md-12 w-100 nav-nav  ">
                  <div className=" col-md-2">
                     <img src='../images/Brand-logo.png' alt="Brandlogo"  className="logo" height={150} width={172}/>
                  </div>
                  <div className="col-md-8">
                     <button  className="navbar-toggler"  type="button"  data-bs-toggle="collapse"  data-bs-target="#navbarNav"  aria-controls="navbarNav"  aria-expanded="false"  aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto text-dark d-flex flex-wrap">
                          <li className="nav-item mx-3">
                            <NavLink to="/" className="nav-link " >Home</NavLink>
                          </li>
                          <li className="nav-item mx-3">
                            <NavLink to="/about" className="nav-link " >About</NavLink>
                          </li>
                          <li className="nav-item mx-3">
                            <NavLink to="/service" className="nav-link">Service</NavLink>
                          </li>
                          <li className="nav-item mx-3">
                            <NavLink to="/landscape" className="nav-link">Landscape</NavLink>
                          </li>
                          <li className="nav-item mx-3">
                            <NavLink to="/work" className="nav-link">  Work</NavLink>
                          </li>
                          <li className="nav-item mx-3">
                            <NavLink to="/blog" className="nav-link">  Blog</NavLink>
                          </li>
                          <li className="nav-item mx-3">
                            <NavLink to="/career" className="nav-link">  Career</NavLink>
                          </li>
                        </ul>
                     </div>
                  </div>

                <div className=" col-md-2 contact-us contact-btn">
                   <NavLink to="/Contact" className="Body200-bold " >Contact us</NavLink>
                </div>
             </div>
          </div>
       </nav>
    </>
  )
};

export default Navbar;
