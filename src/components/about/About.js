import React from 'react'
import './about.css'
import { Link } from 'react-scroll'
import profilePic from '../../assets/nashit_photo.png'

const About = () => {
  return (
    <section id="about">
        <div className="aboutContent">
            <h4 className="header">Who I Am ?</h4>        
            <p className="aboutPara">My name is <span className="aboutName"> NASHIT NOOR</span>. I am a passionate programmer in my daily life. 
                I am a quick learner with a self-learning attitude. I love to learn and 
                explore new technologies. I love mostly the <span className="aboutName">Java Stack</span> but also confident about the frontend. 
                My core skill is based on <span className="aboutName"> Java, Spring Boot, Hibernate</span> and I love to develop backend systems.
                I am available for any kind of job opportunity that suits my skills and interests.
                Regularly upskilling to learn new things and stay updated to current IT trend. 
                Currently upskilling by doing certification in <span className="aboutName">Microservices in Java for Cloud using Spring Boot</span>.
            </p>
        </div>
        <div className="profilePic">
            <img src={profilePic} alt="profile" id='profilePicId'/>
        </div>
    </section>
  )
}

export default About
