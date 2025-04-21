import React from "react";
import cuate from "../../../Images/cuate.png"
const DigitalMastery = () => {
  return (
    <>
    

       <div className="container-fluid" id='digitalMastery' style={{height:'733px'}}>
          <div className="row">
              <div className=" col-md-12 ">
                <div className="header2">
                   <span className="H400-bold">Real Estate-Focused Digital Mastery</span>
                </div>
                <div className=" col-md-12">
                <img src={cuate} className="Cuate"  />
                <div className="Digital-Info">
                  <p>
                    <span > Unlock the Potential of Digital Real Estate Excellence</span>
                     <br />
                      At Osumare,we understand that the real estate landscape demands a digital
                      presence that aligns with the intricacies of property marketing. Our
                      range of specialized services is meticulously designed to catapult
                      your brand's success in the ever-evolving digital property market.<br/>
                  </p>
                  <button className="get-started1">Get Started</button>
                </div>
                </div>
              </div>
          </div>
       </div>


    </>  
  )
};

export default DigitalMastery;
