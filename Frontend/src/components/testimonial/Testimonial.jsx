import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "../Images/TabishPhoto.png",
      author: "Tabish Khan",
      text: "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.",
      symbol: "../Images/symbol.png",
    },
    {
      image: "../Images/AyeshaPhoto.png",
      author: "Ayesha Malik",
      text: "The team at Osumare truly understands the pharma sector. Their customized marketing solutions have elevated our brand's digital presence.",
      symbol: "../Images/symbol.png",
    },
    {
      image: "../Images/RahulPhoto.png",
      author: "Rahul Mehta",
      text: "Exceptional insights and strategic planning by Osumare have significantly improved our online visibility in the competitive pharma market.",
      symbol: "../Images/symbol.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { image, author, text, symbol } = testimonials[currentIndex];

  return (
    <div className="pharma-container" id="testimonials" style={{ width: "1440px" }}>
      <h2 className="pharma-title">What Our Pharma Partners Say</h2>
      <p className="pharma-subtitle">Driving Transformations, One Brand at a Time</p>

      <div className="testimonial-card">
        <div className="image-container">
          <img src={image} alt="Testimonial"  loading="lazy" className="testimonial-image" />
          <div className="play-button">▶</div>
        </div>

        <div className="testimonial-content">
          <p className="author">
            <img src={image} alt={author} loading="lazy" className="author-img" />
            <span className="author-name">{author}</span>
            <img src={symbol} alt="symbol" loading="lazy" className="symbol" />
          </p>
          <p className="Body500-RG">{text}</p>
        </div>
      </div>

      <div className="navigation">
        <button className="nav-button" onClick={handlePrev}>
          ⟵
        </button>
        <button className="nav-button" onClick={handleNext}>
          ⟶
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
