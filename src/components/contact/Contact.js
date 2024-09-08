import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import home from '../../assets/home.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_02mntss', 'template_q09zyae', form.current, {
            publicKey: 'mrXSn7Xzh6WHlY8Jq',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contactForm' id='contacts'>
        <div className="contactPanel">
            <h1 className="heading">Contact With Me</h1>
            <div className="container">
                <p className="para">
                    I am open to any work opportunities that align with my skills and interests.
                </p>
                <form ref={form} onSubmit={sendEmail} className='formBody'>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className='contactBtn' type="submit" value="Send" />
                </form>
            </div>
        </div>
        <div className="contactInfo">
            <div className="infos">
                <img src={email} alt="" /><span className="infoLine">nshtnoor15@gmail.com</span>
            </div>
            <div className="infos">
                <img src={phone} alt="" /><span className="infoLine">+91 8961845961</span>
            </div>
            <div className="infos">
                <img src={home} alt="" /><span className="infoLine">Kolkata, West Bengal, India</span>
            </div>
        </div>
    </div>
  )
}

export default Contact
