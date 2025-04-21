import React from "react";
import FeatureCard from "./featureCard";
import frame892 from "../../../Images/Frame-892.png"
import bradFill from "../../../Images/bard-fill.png"
import flashlight from "../../../Images/flashlight-fill.png"
import Shield from "../../../Images/shield-check-fill.png"
import phone from "../../../Images/phone-find-fill.png"

const FeaturesSection = () => {
  const data=[
    {
      id:1,
      img:bradFill,
      featureCard:'Market Trends Analysis',
      featureInfo:"Predictive insights to guide real estate strategies."
    },
    {
      id:2,
      img:flashlight,
      featureCard:'Targeted Buyer Persona',
      featureInfo:"Understand and connect with your ideal properties buyers."
    },
    {
      id:3,
      img:Shield,
      featureCard:'Competitor Insights',
      featureInfo:"stand out in the property market with informed strategies."
    },
    {
      id:4,
      img:phone,
      featureCard:'Visual content Appeal',
      featureInfo:"Captive buyers with appealing visuals and immersive expercies."
    },
  ]
  return(
    <>
    <div className="container-fluid" id="feature" >
       <div className="fill">
          <div className="header-service">
            <h2 className="H400-bold">Navigation Real Estate's Digital Landscape</h2>
            <p className="Bold500-RG">Insight for Real Estate Marketing Language</p>
          </div>
        </div>
        <div className="col-md-12  my-5 m-auto" style={{width:"1280px"}} >
            <div className="row">
              <div className="col-md-4 ">
                 {
  
                  data.map((val, index) => {
                  
                    return (
                  
                  
                        <FeatureCard
                           key={val.id || index}
                           img={val.img} 
                           featureCard={val.featureCard}
                           featureInfo={val.featureInfo} 
                         />
                  
                  
                    )
                  
                  
                  
                  })
                }
              </div>
              <div className="col-md-8 feature-img">
                 <img src={frame892}  className="img-fluid"/>
              </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default FeaturesSection;
