import './Footer.scss'
import logoData from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';


function Footer(){
    return(
       <footer className="footer">
                 <div className='footer__container'>
                
                    <figure className='footer__figure'>
                          <Link to='/HomePage'><img className='footer__logo' src={logoData} alt="logo" /></Link> 
                          <p className='header__logo-text'>InspireShare</p>
                    </figure>
                    <div className='footer__box'>
                    <ul className='footer__list'>
                        <li className='footer__item'>About Us</li>
                        <li className='footer__item'>Category</li>
                        <li className='footer__item'>FAQ</li>
                    </ul>
                    <ul className='footer__list'>
                        <li className='footer__item'>How it works</li>
                        <li className='footer__item'>Streaks</li>
                        <li className='footer__item'>Profile</li>
                    </ul>

                    </div>
                    <div>

                    </div>
                  


                      <p className='footer__copy'>InspireShare &copy; 2025 </p>

                 </div>
       </footer>
    )
}
export default Footer;