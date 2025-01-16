import './Header.scss'
import logoData from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

function Header(){

    return(
       <header className='header'>
         <div className='header__box'>
           <Link to='/HomePage'><img className='header__logo' src={logoData} alt="logo" /></Link> 
            <p className='header__logo-text'>InspireShare</p>
         </div>
         <nav className='header__nav'>
            <ul className='header__list'>
               <Link to='/HomePage'><li className='header__item'>Home</li></Link> 
               <Link to='/StreakTrackPage'><li className='header__item'>Streaks</li></Link> 
            </ul>
           
         </nav>



       </header>
    )
}
export default Header;