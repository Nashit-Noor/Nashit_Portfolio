import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className='title'>Nashit Noor</h1>
        <div className="desktopMenu">
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">About</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">Experience</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-500} duration={500} className="desktopMenuItemList">Skills</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Education</Link>
            <Link activeClass='active' to='/' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar
