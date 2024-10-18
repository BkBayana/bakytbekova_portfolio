

import './About.css';
import instagramIcon from '../src/assets/icons8-instagram-24.png';
import whatsappIcon from '../src/assets/icons8-whatsapp-24.png';
import telegrammIcon from '../src/assets/icons8-telegram-app-24.png';

function Footer(){
    return (
    <footer className='footerContainer'>
    <div className='socialMedia'>
      <div className='footerContent'>
           <h1 className='mainSubtitle'>Bayana Bakytbekova</h1>
           <h1 className='footerTitle'>Made by Bakytbekova Bayana</h1>
      </div>
      <div className='socialMediaIcons'>
       <a href='https://www.instagram.com*/_bakytbekova_b'><img src={instagramIcon} alt="Instagram" className="icon" /></a>
        <a href='https://web.whatsapp.com/'><img src={whatsappIcon} alt="WhatsApp" className="icon" /></a>
        <a href='https://web.telegram.org/a/'><img src={telegrammIcon} alt="Telegramm" className="icon"/></a>
     </div>
    </div>
    </footer>
    );
}

export default Footer