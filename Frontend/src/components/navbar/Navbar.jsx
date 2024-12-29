import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../../util";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");


  const navigate=useNavigate()
  // Check if the user is logged in (you can replace this with actual logic)
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInuser",true) // Example check
    setIsLoggedIn(loggedIn);
  }, []);

  // Handle Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("Token");  
    localStorage.removeItem("loggedInuser"); 
    handleSuccess("user logged out") 
    setTimeout(()=>{
      navigate('/login');   // Redirect to login page
    },1000)
    setIsLoggedIn(false);  // Update state
        
  };

  // useEffect(()=>{
  //   fet
  // },[])
  return (
    
    <>
       <nav className="navbar navbar-expand-lg bg-light sticky-top shadow-sm animated-navbar " style={{width:'1520px'}} >
          <div className="container-fluid header w-100" >
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
                          {/* Conditionally show Login/Signup or Logout */}
                          {!isLoggedIn ? (
                            <>
                              <li className="nav-item mx-3">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                              </li>
                              <li className="nav-item mx-3">
                                <NavLink to="/signup" className="nav-link">Signup</NavLink>
                              </li>
                            </>
                          ) : (
                            <li className="nav-item mx-3">
                              <button onClick={handleLogout} className="nav-link" style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>
                                Logout
                              </button>
                            </li>
                          )}
                        </ul>
                     </div>
                  </div>

                <div className=" col-md-2 contact-us contact-btn">
                   <NavLink to="/Contact" className="Body200-bold " >Contact us</NavLink>
                </div>
             </div>
          </div>
          < ToastContainer />
       </nav>
    </>
  )
};

export default Navbar;
