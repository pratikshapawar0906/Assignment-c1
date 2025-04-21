import React from "react";
import ServiceItem from "./ServiceItem";
import seo from"../../../Images/seo.png";
import ppc from"../../../Images/PPC.png"
import vector from"../../../Images/Vector.png"
import content from"../../../Images/content.png"
import Webdesign from "../../../Images/Web-design.png"
import DataDriven from"../../../Images/Data-Driven.png"
import Solutions from"../../../Images/Solutions.png"
import Video from"../../../Images/Video.png"

const ServicesSection = () => {

  const data=[
    {
      id:1,
      img:seo,
      serviceCard:"Automotive SEO",
      ServiceInfo:"Drive your success with Automotive SEO to improve visibility and grow your business."
    },
    {
      id:2,
      img:ppc,
      serviceCard:"PPC Precision",
      ServiceInfo:"Maximize visibility and drive quality traffic with precisely targeted Pay-Per-Click campaigns."
    },
    {
      id:3,
      img:vector,
      serviceCard:"Social Acceleration",
      ServiceInfo:"Engage and influence audiences across social media platforms."
    },
    {
      id:4,
      img:content,
      serviceCard:"Content Excellence",
      ServiceInfo:"Craft compelling, audience-specific content to boost engagement."
    },
    {
      id:5,
      img:Webdesign,
      serviceCard:"Web Design",
      ServiceInfo:"Transform visitors into customers with high-performance websites."
    },
    {
      id:6,
      img:DataDriven,
      serviceCard:"Data-Driven Insights",
      ServiceInfo:"Leverage data for strategies, making informed decisions that drive revenue growth."
    },
    {
      id:7,
      img:Solutions,
      serviceCard:"End-to-End Solutions",
      ServiceInfo:"Provide end-to-end marketing solutions tailored for success."
    },
    {
      id:8,
      img:Video,
      serviceCard:"Video Marketing",
      ServiceInfo:"Engage your audience with compelling visual storytelling."
    },
    
  ]
  return (
    <>
        <div className="container-fluid" id='service' style={{height:'997px'}}>
          <div className="fill">
            <div className="header-service">
              <h2 className="H400-bold">Our Service Offerings</h2>
              <p className="Body500-RG text-center">Stratergies that Drive Property Market Excellence</p>
            </div>
          </div>
          <div className="sevices">
            <div className="col-md-12">
                <div className="row " style={{justifyContent:'space-between', Gap:'30px'}}>
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
