import React from "react";
import FeatureCard from "../../components/features/featureCard";

const FeaturesSection = () => {
  const data=[
    {
      id:1,
      img:"../Images/bard-fill.png",
      featureCard:'Market Trends Analysis',
      featureInfo:"Predictive insights to guide real estate strategies."
    },
    {
      id:2,
      img:"../Images/flashlight-fill.png",
      featureCard:'Targeted Buyer Persona',
      featureInfo:"Understand and connect with your ideal properties buyers."
    },
    {
      id:3,
      img:"../Images/shield-check-fill.png",
      featureCard:'Competitor Insights',
      featureInfo:"stand out in the property market with informed strategies."
    },
    {
      id:4,
      img:"../Images/phone-find-fill.png",
      featureCard:'Visual content Appeal',
      featureInfo:"Captive buyers with appealing visuals and immersive expercies."
    },
  ]
  return(
    <>
    <div className="container-fluid" id="feature" style={{width:'1440px'}}>
       <div className="fill">
          <div className="header-service">
            <h2 className="H400-bold">Navigation Real Estate's Digital Landscape</h2>
            <p>Insight for Real Estate Marketing Language</p>
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
                 <img src="../Images/Frame-892.png"  className="img-fluid"/>
              </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default FeaturesSection;
