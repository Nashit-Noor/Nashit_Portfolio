import React from 'react'
import './experienceMod.css'
import hired from '../../assets/hired.png'

const ExperienceMod = (props) => {
  return (
    <div className="experienceBody">
        <div className="expImg">
            <img src={hired} alt="Hired" className="hired"/>
        </div>
        <div className="experience">
            <span className="timeline">
                {props.timeline}
            </span>
            <h2 className="designation">
                {props.designation}
            </h2>
            <h3 className="companyName">
                {props.company}   
            </h3>
        </div>
    </div>
  )
}

export default ExperienceMod
