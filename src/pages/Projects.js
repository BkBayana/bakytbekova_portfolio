import React from 'react';
import '../style/Navbar.css';
import '../style/Project.css';

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
      <div className='projectsBlock'>
        <div className='projectsImage'>
          <a href='https://ваш_пользователь.github.io/project1/' target="_blank" rel="noopener noreferrer">
            <img src={photo} className="photo" alt="Project 1" />
          </a>
          <a href='https://ваш_пользователь.github.io/project2/' target="_blank" rel="noopener noreferrer">
            <img src={photo1} className="photo" alt="Project 2" />
          </a>
          <a href='https://ваш_пользователь.github.io/project3/' target="_blank" rel="noopener noreferrer">
            <img src={photo2} className="photo" alt="Project 3" />
          </a>
        </div>
        <div className='projectsImage'>
          <a href='https://ваш_пользователь.github.io/project4/' target="_blank" rel="noopener noreferrer">
            <img src={photo3} className="photo" alt="Project 4" />
          </a>
          <a href='https://ваш_пользователь.github.io/project5/' target="_blank" rel="noopener noreferrer">
            <img src={photo4} className="photo" alt="Project 5" />
          </a>
          <a href='https://ваш_пользователь.github.io/project6/' target="_blank" rel="noopener noreferrer">
            <img src={photo5} className="photo" alt="Project 6" />
          </a>
        </div> 
      </div>
    </div>
  );
}

export default Projects;
