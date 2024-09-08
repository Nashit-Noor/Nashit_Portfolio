import React from 'react'
import EducationMod from './EducationMod'
import './education.css'

const Education = () => {
  return (
    <div className='edu' id='education' >
        <h1 className="heading">Education</h1>
        <div className="gifs">
            <div ><iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p></p>
        </div>
        <div className="eduBlock">
            <EducationMod timeline="(August 2015 - June 2019)" degree="B.TECH IN COMPUTER SCIENCE & ENGG" college="Pailan College of Management & Technology"/>
        </div>
        <div className="eduBlock">
            <EducationMod timeline="(July 2013 - March 2015)" degree="Higher Secondary" college="SVS Vidyalaya"/>
        </div>
        <div className="eduBlock">
            <EducationMod timeline="(March 2002 - March 2013)" degree="Secondary" college="Mahavir Institute of Education & Research"/>
        </div>
    </div>
  )
}

export default Education
