
import logoData from '../../assets/images/logo.png'
function SignUpHeader(){
    return(
        <header className="header">
         <div className='header__box'>
            <img className='header__logo' src={logoData} alt="logo" />
             <p className='header__logo-text'>InspireShare</p>
          </div>
    
        </header>
      
    )
}
export  default SignUpHeader;