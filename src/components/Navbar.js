import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../assets/letter-b (1).png';
import '../style/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className='header'>
      <div className='headerContainer'>
        <Link to='/'>
          <img src={logo} alt="Project Logo" className='logo' />
        </Link>
        <button className="burgerButton" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`headerMenu ${isMenuOpen ? 'open' : ''}`}>
          <ul className='headerMenu'>
            <li><Link to="/" onClick={toggleMenu}>MAIN</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>PROJECTS</Link></li>
          </ul>
        </nav>

        {/* Переключатель темы */}
        <label className="themeSwitch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}
export default Navbar;
