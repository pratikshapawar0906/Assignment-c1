import React from "react";

const Testimonial = () => {
  return (
    <>

    <div className="pharma-container" id="testimonials" style={{width:'1440px'}}>
      <h2 className="pharma-title">What Our Pharma Partners Say</h2>
      <p className="pharma-subtitle">Driving Transformations, One Brand at a Time</p>

      <div className="testimonial-card">
        <div className="image-container">
          <img
            src="../Images/TabishPhoto.png" // Replace with actual image URL
            alt="Testimonial"
            className="testimonial-image "
          />
          <div className="play-button">▶</div>
        </div>

        <div className="testimonial-content">
        <p className="author">
            <img src="../Images/TabishPhoto.png" className="author-img"/>
            <span className="author-name">Tabish Khan</span>
            <img src='../Images/symbol.png' alt='symbol' className="symbol" height={62} width={62}/>
          </p>
          <p className="Body500-RG">
            Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.
          </p>
          
        </div>
      </div>

      <div className="navigation">
        <button className="nav-button">⟵</button>
        <button className="nav-button">⟶</button>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
