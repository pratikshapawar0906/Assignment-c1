import React from 'react'

const featureCard = (props) => {
  return (
    <>
      <div className="feature-card d-flex align-items-center justify-content-center"  >
           <div className="feature-logo">
             <img src={props.img} height={24} width={24}  />
           </div>
          <div className="frame-9">
             <h3>{props.featureCard}</h3>
             <p >{props.featureInfo}</p>
          </div>
      </div>
    </>
  )
}

export default featureCard
