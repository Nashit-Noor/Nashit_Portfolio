import React from 'react'
import './educationMod.css'
import hired from '../../assets/hired.png'

const EducationMod = (props) => {
  return (
    <div className="educationBody">
        <div className="expImg">
            <img src={hired} alt="Hired" className="hired"/>
        </div>
        <div className="experience">
            <span className="timeline">
                {props.timeline}
            </span>
            <h2 className="degree">
                {props.degree}
            </h2>
            <h3 className="collegeName">
                {props.college}   
            </h3>
        </div>
    </div>
  )
}

export default EducationMod
