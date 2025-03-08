import './Category.scss';
import { Link } from 'react-router-dom';


function Category({category}){
    
     

    return(
        <>

         <div className='carousel__frame'>
          <div className='carousel__image-frame'>
            <img  className='carousel__image' src={`https://inspireshare-d06d7caff3c9.herokuapp.com/images/${category.photo}`} alt="image" />
          </div> 
          <Link  className='carousel__link'to='/StressCategoryPage'>
             <div className='carousel__title-box'>
               <p className='carousel__title'>{category.title}</p>
             </div>
          </Link>
        
         </div>
        </>
       
    )
}
export default Category;