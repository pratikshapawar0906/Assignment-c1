import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data=[
    {
      id:1,
      que:"How does Osumare measure campaign success?",
    },
    {
      id:2,
      que:"How does Osumare measure campaign success?",
    },
    {
      id:3,
      que:"How does Osumare measure campaign success?",
    }
  ]
  return (
    <>

       <div className="container-fluid" id="faq-section" >
            <div className="col-md-12">
               <div className="row">
                  <div className="Frame-878">
                    <div className="Frame-449">
                      <h2 className="H400-bold">Frequently Asked Questions</h2>
                      <p className="Body500-RG">
                        Pinpoint your audience with precision, ensuring your marketing efforts
                        reach those most likely to engage with your brand.
                      </p>
                    </div>

                    <div className="faq-container">
                      {data.map((item, index) => (
                        <div
                          key={item.id}
                          className={`faq-box ${activeIndex === index ? "active" : ""}`}
                        >
                          <div
                            className={`faq-box-question ${activeIndex === index ? "highlighted" : "" }`} onClick={() => toggleFAQ(index)}
                          >
                            {`${index + 1}. ${item.que}`}
                            <span className="faq-icon">
                              {activeIndex === index ? "▲" : "▼"}
                            </span>
                          </div>
                          {activeIndex === index && (
                            <div className="faq-box-answer">
                              <p>
                                We believe in measurable results. Our data-driven approach
                                means that every campaign's performance is tracked, analyzed,
                                and refined for optimal outcomes. We provide regular reports
                                that detail key metrics, giving you clear insights into how
                                our strategies are driving growth for your brand.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
              
                  </div>
               </div>
            </div>
       </div>


    
    </>
  );
};

export default Faq;
