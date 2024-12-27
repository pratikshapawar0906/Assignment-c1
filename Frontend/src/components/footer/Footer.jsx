import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid" id="footer" style={{width:'1280px',height:'713px'}} >
        <div className="col-md-12">
            <div className="row">
              <div className="footer-container p-5">
                {/* Left Section */}
                <div className="footer-left">
                    <div className="Frame-253">
                      <img src="../Images/Brand-logo.png" alt='logo' width={132} height={100} />
                      <p className="Body300-Rg">
                        The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
                      </p>
                    </div>
                  <p className="footer-address">
                    <strong>Address:</strong> <br />
                     <span className="Body300-Rg">Survey No. 43, Pathare, Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharashtra, India.</span>
                  </p>
                  <div className="footer-contact">
                    <strong>Contacts:</strong>
                    <p className="my-3">
                      <a href="mailto:hello@osumare.in" className="footer-link">
                      <i className="bi bi-envelope-fill"></i> hello@osumare.in
                      </a>
                    </p>
                    <p>
                      <a href="tel:+918459876226" className="footer-link">
                      <i className="bi bi-telephone-fill"></i> +91 8459 8762 26
                      </a>
                    </p>
                  </div>
                </div>
        
                {/* Middle Section */}
                <div className="footer-middle">
                  <h4 className="H300-bold">Menu</h4>
                  <ul className="Frame-431">
                    <li>
                      <a href="#home" className="footer-link">Home</a>
                    </li>
                    <li>
                      <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                      <a href="#services" className="footer-link">Services</a>
                    </li>
                    <li>
                      <a href="#work" className="footer-link">Work</a>
                    </li>
                    <li>
                      <a href="#blog" className="footer-link">Blog</a>
                    </li>
                    <li>
                      <a href="#career" className="footer-link">Career</a>
                    </li>
                  </ul>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                  <h4 className="H300-bold">Social</h4>
                  <div className="social-icons">
                    <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-youtube"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-pinterest"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-whatsapp"></i> </a>
                    <a href="#" className="social-link"><i className="bi bi-instagram"></i> </a>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="footer-bottom">
                <p>© 2023 Osumare. All rights reserved.</p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
