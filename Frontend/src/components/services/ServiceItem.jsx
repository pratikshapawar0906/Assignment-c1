import React from 'react'

const ServiceItem = (props) => {
  return (
    <>
      <div className="col-md-3 services-item">
        <div className="service-card d-flex flex-column align-items-center justify-content-center"  >
           <div className="service-logo">
             <img src={props.img} height={24} loading="lazy" width={24}  />
           </div>
           <h3 className='H200-bold'>{props.serviceCard}</h3>
        </div>
        <p className="Body-300" >
          {props.ServiceInfo}
        </p>
        </div>
    </>
  )
}

export default ServiceItem
