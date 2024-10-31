import '../style/Main.css';
import '../style/About.css';
import React, { useEffect, useState } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/mainPhoto.jpg';
import achivImage from '../assets/cert.jpeg';
import achivImage1 from '../assets/cert1.jpeg';

export function Slider({ label, initialValue }) {
  const [percentage, setPercentage] = useState(initialValue); 

  const handleSliderChange = (e) => {
    setPercentage(e.target.value);
  };
  return (
    <div className="sliderContainer" data-aos="zoom-in" data-aos-duration="500">
      <h1 className='sliderContainerTitle'>{label}</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="percentageDisplay">{percentage}%</div>
    </div>
  );
}
function About() {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <div className='aboutPage'>
      <div className="aboutPageBlock">
        <div> <img src={image} alt='Изображение' className='image'/></div>
        <div className='aboutPageBlockCard'>
            <h2 className='aboutPageBlockTextTitle'>About me</h2>
            <h1 className='aboutPageBlockText'>
            Hello! My name is Bayana Bakytbekova. I am an aspiring web developer with experience in technical support and participation in various competitions where I achieved prize-winning places. Last year, I graduated from School #67, completed programming courses, and am now actively developing my skills in web development, studying technologies such as React.js and Python.
            I am passionate about creating applications that help people. One of my goals is to develop applications that are not only functional but also easy to understand and convenient for users.
            Thanks to my experience in technical support, I have developed skills in stress resilience and patience. I am hardworking, responsible, and always strive for improvement.</h1>
        </div>
      </div>
      <div className='achiveBlock'>
        <h1 className='achiveBlockTitle'>Experience and education</h1>
      <div className='achiveBlockCard'>
      <div className='achiveBlockText'>
          <h1 className='achiveBlockTextTitle'>My resume</h1>
      </div>
      <div className='achiveBlockCardBlock'>
      <div className='achiveBlockContent'>
        <h1 className='achiveBlockContentTitle'>Experience</h1>
        <h1 className='achiveBlockContentSubtitle'>Work as a technical support position</h1>
      </div>
      <div className='achiveBlockContent'>
        <h1 className='achiveBlockContentTitle'>Education</h1>
        <h1 className='achiveBlockContentSubtitle'>Сompleted layout courses</h1>
        <h1 className='achiveBlockContentSubtitle'> Studying computer science at the International College of IT and Business “Salymbekov University”</h1>
        <div className='achiveBlockImage'>
        <img src={achivImage} alt='Изображение' className='achivImage' />
        <img src={achivImage1} alt='Изображение' className='achivImage' />
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default About;
