import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import contact from '../../assets/contact.png'
import download from '../../assets/download.png'
import bg from '../../assets/profile.png'

const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Nashit</span> <br />Software Developer</span>
            <p className="introPara">I'm a skilled and passionate Java developer with experience <br /> in creating fast, robust and scalable applications.</p>
            <div className="btns">
                <Link><button className="btn"><img src={contact} alt="" className='btnImg'/>Contact me </button></Link>
                <Link><button className="btn"><img src={download} alt="" className='btnImg'/>Get Resume </button></Link>
            </div>
            <img src={bg} alt="profile" className='bg'/>
        </div>
        <hr className="solid"></hr>
      </section>
  )
}

export default Intro
