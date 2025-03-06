import './Category.scss';
import { Link } from 'react-router-dom';


function Category({category}){
    
     

    return(
        <>

         <div className='card__carousel'>
          <div className='card__image-frame'>
            <img  className='card__image' src={`https://inspireshare-d06d7caff3c9.herokuapp.com/images/${category.photo}`} alt="image" />
          </div> 
          <Link  className='card__link'to='/StressCategoryPage'>
             <div className='card__title-box'>
               <p className='card__title'>{category.title}</p>
             </div>
          </Link>
        
         </div>
         
         {/* https://inspireshare-d06d7caff3c9.herokuapp.com/ */}https://localhost:7000
        </>
       
    )
}
export default Category;