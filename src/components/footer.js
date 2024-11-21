
import '../style/footer.css';
import instagramIcon from '../assets/social.png';
import whatsappIcon from '../assets/telegram.png';
import telegrammIcon from '../assets/instagram.png';
import logo from '../assets/letter-b (1).png';
import { Link } from 'react-router-dom';
function Footer(){
    return (
      <footer className='footerContainer'>
      <div className='socialMedia'>
        <div className='footerContent'>
          <Link to='/'><img src={logo} alt="Project Logo" className='logo' /></Link>
          <h1 className='footerTitle'>Made by Bakytbekova Bayana</h1>
        </div>
        <div className='socialMediaIcons'>
          <a href='https://www.instagram.com/_bakytbekova_b' target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icon" />
          </a>
          <a href='https://wa.me/YOUR_PHONE_NUMBER' target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="icon" />
          </a>
          <a href='https://t.me/YOUR_USERNAME' target="_blank" rel="noopener noreferrer">
            <img src={telegrammIcon} alt="Telegram" className="icon" />
          </a>
        </div>
      </div>
    </footer>
    
    );
}

export default Footer