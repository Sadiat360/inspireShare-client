import './Header.scss'
import logoData from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';

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
               <Link to='/ProfilePage'><li className='header__item'>Profile</li></Link> 
            </ul>
           
         </nav>
         <nav className='header__nav-mob'>
            <MenuBar />

         </nav>



       </header>
    )
}
export default Header;