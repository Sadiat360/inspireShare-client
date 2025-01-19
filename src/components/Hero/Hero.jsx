import './Hero.scss'
import { useEffect, useState } from 'react';


function Hero({slides}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(1);

    useEffect(() =>{
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to next slide
            setNextSlide((prev) => (prev + 1) % slides.length); // Update next slide
          }, 5000); // Change slide every 5 second
       return () => clearInterval(interval);
    }, [slides.length]);

    const currentHero = slides[currentSlide];
    const nextHero = slides[nextSlide];

    return(

             
            <div className='hero__slide-container'>
            

                <div className='hero__slide current-slide'>
                  <img className='hero__image' src={`http://localhost:7000/images/${currentHero.photo}`} alt="image" />
                  <div className='hero__text-box'>
                     <h1 className='hero__title'>{currentHero.title}</h1>
                     <p className='hero__sub'>{currentHero.subtitle}</p>
                  </div>
                </div>
                <div  className='hero__slide next-slide'> 
                    <img  className='hero__image' src={`http://localhost:7000/images/${nextHero.photo}`} alt="image" />
                    <div className='hero__text-box'>
                       <h1 className='hero__title'>{nextHero.title}</h1>
                       <p className='hero__sub'>{nextHero.subtitle}</p>
                   </div>

                </div>
    
               

            </div>
        
    )
}
export default Hero;