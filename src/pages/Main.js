
import React, { useEffect, useState } from 'react'; 
import '../style/Main.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import aboutPhoto from '../assets/mainp.jpg';

function Main() {
  useEffect(() => {
    AOS.init(); 
  }, []);
  
  return (
    <section className='mainPage'>
      <div className='mainPageContainer'>
        <div className='main'>
          <h1 className='mainTitle' data-aos="fade-up" data-aos-duration="700">Web Developer</h1>
        </div>
      <div className='sectionImage'>
        <div className='sectionImageBlock'>
          <img src={aboutPhoto} className='aboutPhoto' alt="About"/>
        </div>
        <div className='sectionBlockText' data-aos="fade-left" data-aos-duration="700">
            <h1 className='sectionsubtitle'>
            Hello! I am <span>Bayana Bakytbekova</span>, a <span>web developer</span> creating user-friendly and efficient websites. I specialize in front-end development, focusing on technologies like <span>React.js, HTML, CSS, and JavaScript</span>.
            </h1>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
