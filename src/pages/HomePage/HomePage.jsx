import './HomePage.scss'
import Hero from '../../components/Hero/Hero';
import Category from '../../components/Category/Category';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import FAQ from '../../components/FAQ/FAQ';


function HomePage(){
    const  [heroSlides, setheroSlides] = useState([]);
    const [categoryImage, setCategoryImage] = useState([])

    const responsive = {
      superLargeDesktop: {
       
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 700},
        items: 2
      },
      mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1
      }
    };

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

   
   
     
    useEffect(() =>{
       async function getCategory() {
          const response = await axios.get('http://localhost:7000/category ')
          console.log('catregory images:', response.data)
          setCategoryImage(response.data);
   
          }
          getCategory()
    }, [])
   
    return(
        <>
        
        <section className='hero'>
          
        {heroSlides.length > 0 ? (
          <Hero slides={heroSlides} />
        ) : (
          <p>Loading hero slides...</p> // Display a loading message while fetching
        )}
      </section>
       <section className='card'> 
      <Carousel responsive={responsive}>

             {categoryImage.map ((category) =>{
                return(
                   <Category  key={category.id} category={category}/> 
                )
             })}

      </Carousel> 
     
      </section> 
     
     {/* /* Your other component */}
      <FAQ />
    
        </>
       
    )
}

export default HomePage;