import './HomePage.scss'
import HeroImage from '../../assets/images/heroimage.png'
import Header from '../../components/Header/Header';
import Category from '../../components/Category/Category';

function HomePage(){
    return(
        <>
        
        <section className='hero'>
            <img className=' hero__image'src={HeroImage} alt="hero-image" />
            <div className='hero__container'>
                <h1 className='hero__title'>I AM because WE ARE, since we ARE, therefore I AM</h1>
               
            </div>
       
      </section>
      < Category/>
    
        </>
       
    )
}

export default HomePage;