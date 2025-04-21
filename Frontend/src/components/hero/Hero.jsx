import React from "react";
import Header from '../../../Images/Header-image.png';

const Hero = () => {
  return (
    <>
      <div className="container-fluid" style={{ height:'1024px'}}>
        <div className="img ">
            <div className="Frame-3 animated-frame">
               <p className="fs animated-title">Elevate <span>Real Estate Success</span> with osumare's Digital Expertise</p>
               <p className="animated-subtitle">Tailored Solution for thriving in the Digital Real Estate Landscape</p>
               <button className="get-started">Get Started</button>
            </div>\
            <div className="Elipse-190">
              
            </div>
            <div className="header-img">
                <img src={Header} loading="lazy" className="img-fluid"/>
            </div>
        </div>
      </div>
    </>
  )
};

export default Hero;
