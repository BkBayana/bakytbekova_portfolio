import React from 'react';
import '../style/Navbar.css'
import '../style/Main.css';
import photo from '../assets/img.png';
import photo1 from '../assets/img1.png';
import photo2 from '../assets/game.png';
import photo3 from '../assets/trip.png';
import photo4 from '../assets/food.png';
import photo5 from '../assets/toys.png';
function Projects() {
  return (
    <div className='projectsContent'>
      <h1 className='projectsTitle'>My works</h1>   
      <div className='projectsImage'>
        <a href='https://github.com/BkBayana/CS25-24-Intro-to-Python/tree/main/dae'><img src={photo} alt="prPhoto" className="photo" /></a>
        <a href='https://www.instagram.com*/_bakytbekova_b'><img src={photo1} alt="prPhotoOne" className="photo" /></a>
        <a href='https://github.com/BkBayana/CS25-24-Intro-to-Python/tree/main/dae'><img src={photo2} alt="prPhoto" className="photo" /></a>
      </div>
      <div className='projectsImage'>
        <a href='https://github.com/BkBayana/CS25-24-Intro-to-Python/tree/main/dae'><img src={photo3} alt="prPhoto" className="photo" /></a>
        <a href='https://github.com/BkBayana/CS25-24-Intro-to-Python/tree/main/dae'><img src={photo4} alt="prPhoto" className="photo" /></a>
        <a href='https://github.com/BkBayana/CS25-24-Intro-to-Python/tree/main/dae'><img src={photo5} alt="prPhoto" className="photo" /></a>
      </div> 
    </div>
    
  );
}

export default Projects;