import React from "react";
import Faq from "../faq/Faq";

const PeaceOfMind = () => {
  return (
    <>
          <div className="container-fluid" id="peaceofmind" style={{width:'1440px'}}>
              <div className="col-md-12">
                  <div className="row  ">
                    <div className="blue"></div>
                    <div className="peaceOfMind">
                        <div className="peace-Info">
                            <h2 className="H400-bold">Your  Peace of Mind</h2>
                            <p className="Body500-RG">Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market
                            </p>
                        </div>
                        <button className="get-started1">Get Started</button>
                    </div>
                    <div className="pink"></div>
                  </div>
              </div>
          </div>
          <Faq />
    </>
  )
};

export default PeaceOfMind;
