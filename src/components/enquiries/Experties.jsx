import React from 'react'
import DriveEnq from "./DriveEnq";

const Experties = () => {
    const data=[
        {
            id: 1,
            title: "Effective CTAs",
            description:
              "See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
            img: "../Images/Effective.png", // Replace with the actual image path
          },
          {
            id: 2,
            title: "Conversion-Optimized Landing Pages",
            description:
              "Explore a case study where our landing page optimization increased property lead conversion rates by 30%.",
            img: "../Images/Conversion.png", // Replace with the actual image path
          },
          {
            id: 3,
            title: "Trust Building with Social Proof",
            description:
              "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project.",
            img: "../Images/TrustBuilding.png", // Replace with the actual image path
          },
          {
            id: 4,
            title: "Mobile-First Success",
            description:
              "Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
            img: "../Images/Mobile-First.png", // Replace with the actual image path
          },
    ]
  return (
    <>
       <div className="col-md-12 " style={{marginTop:'100px'}}>
            <div className="fill">
               <div className="header-service">
                 <h2 className="H400-bold">Our Experties in Action</h2>
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
    </>
  )
}

export default Experties
