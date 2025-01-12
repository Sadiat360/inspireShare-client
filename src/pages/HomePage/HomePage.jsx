import './HomePage.scss'
import Hero from '../../components/Hero/Hero';
import HeroImage from '../../assets/images/heroimage.png'
import Header from '../../components/Header/Header';
import Category from '../../components/Category/Category';
import axios from 'axios';
import { useState,useEffect } from 'react';
import FAQ from '../../components/FAQ/FAQ';


function HomePage(){
    const  [heroSlides, setheroSlides] = useState([]);

    useEffect(()=>{
        async function getHeroSlides() {
            try{
                const response = await axios.get('http://localhost:7000/hero');
                console.log('these are hero images',response.data)
                setheroSlides(response.data)
            }catch(error){
                console.error('Hero getting hero images:', error);
            }
    
        }
        getHeroSlides()
    }, [])

   
        
   
    return(
        <>
        
        <section className='hero'>
           {/* Only render Hero if heroSlides has data */}
        {heroSlides.length > 0 ? (
          <Hero slides={heroSlides} />
        ) : (
          <p>Loading hero slides...</p> // Display a loading message while fetching
        )}
      </section>
      <Category /> {/* Your other component */}
      <FAQ />
    
        </>
       
    )
}

export default HomePage;