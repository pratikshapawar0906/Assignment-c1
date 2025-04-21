import React from "react";
import DriveEnq from "./DriveEnq";
import Experties from "./Experties";
import bro from "../../../Images/bro.png"
import callaction from "../../../Images/CallAction.png"
import LandingPage from "../../../Images/LandingPage.png"
import SocialProof from "../../../Images/SocialProof.png"
import MobileFriendly from "../../../Images/MobileFriendly.png"
const Enquiries = () => {
  const data = [
    {
      id: 1,
      img: callaction,
      title: "Call-to-Action Optimization",
      description:
        "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    },
    {
      id: 2,
      img: LandingPage,
      title: "Landing Page Efficiency",
      description:
        "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
      id: 3,
      img: SocialProof,
      title: "Social Proof Utilization",
      description:
        "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.",
    },
    {
      id: 4,
      img: MobileFriendly,
      title: "Mobile-Friendly Experience",
      description:
        "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
    },
  ];
  return (
    <>
          <div className="container-fluid " id="enquiries"  >
            <div className="fill">
               <div className="header-service">
                 <h2 className="H400-bold">Driving Property Inquiries to Conversions</h2>
                 <p> Streamlines strategies for Real Estate Success</p>
               </div>
            </div>

            <div className="col-md-12 d-flex  my-4 px-3" style={{justifyContent:'space-between'}}  >
              <div className="col-md-4" style={{animation:' slideInLeft 1s ease-in-out' }}>
                 <img src={bro} loading="lazy"  className="img-fluid"/>
              </div>
              <div className="col-md-6">
                 <div className="frame-296" style={{animation:' slideInRight 1s ease-in-out' }}>
                   <h2 className="H400-bold">Optimized Path to Property Purchase</h2>
                    <p className="Body500-RG">
                      In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
                    </p>
                 </div>
                 <button className="get-started1">Get Started</button>
              </div>
            </div>

            <div className="col-md-12 my-5">
              <div className="fill">
                 <div className="header-service">
                   <h2 className="H400-bold">Driving Property Inquiries to Conversions</h2>
                 </div>
              </div>
              
              <div className="col-md-12 Enquiries-grid">
                <div className="row">
                {
                  data.map((val,index,array) => {

                    return(
                      
                      <DriveEnq
                      key={val.id || index}
                      img={val.img} 
                      title={val.title}
                      description={val.description} 
                      />
                    )
                  }
                     
                  )
                }
                </div>
              </div>
            </div>
            <Experties />
          </div>
       
    </>
  )
};

export default Enquiries;
