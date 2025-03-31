import './Header.scss'
import logoData from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import MenuBar from '../../svgs/MenuBar/MenuBar';
import { useState } from 'react';
import CloseBar from '../../svgs/CloseBar/CloseBar';

function Header(){
   const [openNav, setOpenNav]= useState([]);

   function toggleMenuBar(){
      setOpenNav(!openNav);
   }
   const handleSectionClick = (event, sectionId) =>{
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if(section){
         section.scrollIntoView({behavior: "smooth"});
      }
      toggleMenuBar();
   }
  

    return(
       <header className='header'>
         <div className='header__box'>
           <Link to='/HomePage'><img className='header__logo' src={logoData} alt="logo" /></Link> 
           <Link to='/HomePage'><p className='header__logo-text'>InspireShare</p></Link>
         </div>
         <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'> <Link to='/HomePage'>Home</Link></li> 
              <li className='header__item'> <Link to='/StreakTrackPage'>Streaks</Link> </li>
              <li className='header__item'> <Link to='/ProfilePage'>Profile</Link> </li>
            </ul>
           
         </nav>
         <button  className="header__menu-btn" 
                  onClick={toggleMenuBar} 
                  aria-label='Toggle Menu'>
                  <MenuBar />
         </button>
         {openNav === true ? ( <nav className='header__nav-mob'>
          
          <div className='header__mobNav'>
              <button  className="header__close-btn"
               onClick={toggleMenuBar} 
               aria-label='Close Menu'><CloseBar/></button>

               <ul className='header__list-mob'>
                     <li onClick={(e) => handleSectionClick(e, 'hero')} className='header__li'><Link to='/HomePage'>Home</Link> </li>
                     <li onClick={(e) => handleSectionClick(e, 'streak')} className='header__li'> <Link to='/StreakTrackPage'>Streaks</Link> </li>
                     <li onClick={(e) => handleSectionClick(e, 'profile')}className='header__li'> <Link to='/ProfilePage'>Profile</Link> </li>
                   
               </ul>
            </div>
         </nav>)  : null}
         



       </header>
    )
}
export default Header;