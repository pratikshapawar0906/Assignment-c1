import React from "react";

import ServiceItem from "./ServiceItem";

const ServicesSection = () => {

  const data=[
    {
      id:1,
      img:'../Images/seo.png',
      serviceCard:"Automotive SEO",
      ServiceInfo:"Drive your success with Automotive SEO to improve visibility and grow your business."
    },
    {
      id:2,
      img:'../Images/PPC.png',
      serviceCard:"PPC Precision",
      ServiceInfo:"Maximize visibility and drive quality traffic with precisely targeted Pay-Per-Click campaigns."
    },
    {
      id:3,
      img:'../Images/Vector.png',
      serviceCard:"Social Acceleration",
      ServiceInfo:"Engage and influence audiences across social media platforms."
    },
    {
      id:4,
      img:'../Images/content.png',
      serviceCard:"Content Excellence",
      ServiceInfo:"Craft compelling, audience-specific content to boost engagement."
    },
    {
      id:5,
      img:'../Images/Web-design.png',
      serviceCard:"Web Design",
      ServiceInfo:"Transform visitors into customers with high-performance websites."
    },
    {
      id:6,
      img:'../Images/Data-Driven.png',
      serviceCard:"Data-Driven Insights",
      ServiceInfo:"Leverage data for strategies, making informed decisions that drive revenue growth."
    },
    {
      id:7,
      img:'../Images/Solutions.png',
      serviceCard:"End-to-End Solutions",
      ServiceInfo:"Provide end-to-end marketing solutions tailored for success."
    },
    {
      id:8,
      img:'../Images/Video.png',
      serviceCard:"Video Marketing",
      ServiceInfo:"Engage your audience with compelling visual storytelling."
    },
    
  ]
  return (
    <>
        <div className="container-fluid" id='service' style={{ width:'1440px'}}>
          <div className="fill">
            <div className="header-service">
              <h2 className="H400-bold">Our Service Offerings</h2>
              <p>Stratergies that Drive Property Market Excellence</p>
            </div>
          </div>
          <div className="sevices">
            <div className="col-md-12">
                <div className="row " style={{justifyContent:'space-between'}}>
                {
  
                  data.map((val, index, array) => {
                  
                    return (
                  
                  
                        <ServiceItem
                           key={val.id || index}
                           img={val.img} 
                           serviceCard={val.serviceCard}
                           ServiceInfo={val.ServiceInfo} 
                         />
                  
                  
                    )
                  
                  
                  
                  })
                }
                  
                </div>
            </div>
          </div>
          <button className="get-started1">Get Started</button>
        </div>
    </>
  )
};

export default ServicesSection;
