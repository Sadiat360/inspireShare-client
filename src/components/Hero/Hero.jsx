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

             
            <div className='hero__container'>
                <img src={`http://localhost:7000/images/${currentHero.photo}`} alt="image" />
                <div>
                   <h1>{currentHero.title}</h1>
                   <p>{currentHero.subtitle}</p>
               </div>
                <img src={`http://localhost:7000/images/${nextHero.photo}`} alt="image" />
                <div>
                   <h1>{nextHero.title}</h1>
                   <p>{nextHero.subtitle}</p>
               </div>

            </div>
        
    )
}
export default Hero;