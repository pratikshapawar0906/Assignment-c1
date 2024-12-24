import React from 'react'

const DriveEnq = (props) => {
  return (
    <>
      <div  className="col-md-6 enquiries-card">
        <div className="img-wrapper">
          <img src={props.img} alt={props.title} className="enq-img" />
        </div>
        <div className="Enq-Info">
          <h3 className="H400-bold">{props.title}</h3>
          <p className="Body500-RG">{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default DriveEnq
