import './Category.scss';
import embraceData from '../../assets/images/embrace.png'
import heartData from '../../assets/images/heart.png'
import thinkData from '../../assets/images/think.png'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';



function Category({category}){
    
     

    return(
        <>

         <div className='card__carousel'>
          <div className='card__image-frame'>
            <img  className='card__image' src={`http://localhost:7000/images/${category.photo}`} alt="image" />
          </div>
          <Link to='/StressCategoryPage'>
             <div className='card__title-box'>
               <p className='card__title'>{category.title}</p>
             </div>
          </Link>
        
         </div>
         
         
        </>
       
    )
}
export default Category;