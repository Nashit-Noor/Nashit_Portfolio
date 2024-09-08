import React from 'react'
import ExperienceMod from './ExperienceMod'
import './experience.css'

const Experience = () => {
  return (
    <div className='exp' >
        <h1 className="heading">Experiences</h1>
        <div className="gifs">
            <div ><iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p></p>
        </div>
        <div className="expBlock">
            <ExperienceMod timeline="(April 2021 - Present)" designation="Engineer" company="Black Box Ltd" />
        </div>
        <div className="expBlock">
            <ExperienceMod timeline="(May 2020 - March 2021)" designation="Associate Software Engineer" company="Gazelle Information Technologies Pvt Ltd" />
        </div>
        <div className="expBlock">
            <ExperienceMod timeline="(July 2019 - February 2020)" designation="Trainee" company="Gazelle Information Technologies Pvt Ltd" />
        </div>
    </div>
  )
}

export default Experience
