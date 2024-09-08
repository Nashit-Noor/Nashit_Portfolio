import React from 'react'
import nashit from '../../assets/nashit_photo.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './skills.css';
import java from '../../assets/skill/java.png'
import springBoot from '../../assets/skill/spring boot.png'
import hibernate from '../../assets/skill/Hibernate.png'
import sql from '../../assets/skill/sql.png'
import javaScript from '../../assets/skill/java-script.png'
import html5 from '../../assets/skill/html-5.png'
import css3 from '../../assets/skill/css-3.png'
import reactJs from '../../assets/skill/react-js.png'

// import required modules
import { Autoplay} from 'swiper/modules';

const Skills = () => {
  return (
    <div className='skill' id='skills'>
      <h1 className="heading">Skills</h1>
      <Swiper
        slidesPerView={5}
        speed={18000}
        spaceBetween={32}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={java} alt="Java" />
          <h4 className="heading">Java</h4>
        </SwiperSlide>
        <SwiperSlide><img src={springBoot} alt="Spring Boot" /><h4 className="heading">Spring Boot</h4></SwiperSlide>
        <SwiperSlide><img src={hibernate} alt="Hibernate" /><h4 className="heading">Hibernate</h4></SwiperSlide>
        <SwiperSlide><img src={sql} alt="MySql" /><h4 className="heading">MySql</h4></SwiperSlide>
        <SwiperSlide><img src={html5} alt="Html" /><h4 className="heading">Html</h4></SwiperSlide>
        <SwiperSlide><img src={css3} alt="Css" /><h4 className="heading">Css</h4></SwiperSlide>
        <SwiperSlide><img src={javaScript} alt="JavaScript" /><h4 className="heading">JavaScript</h4></SwiperSlide>
        <SwiperSlide><img src={reactJs} alt="ReactJS" /><h4 className="heading">ReactJs</h4></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Skills
