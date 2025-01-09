import './Category.scss';
import embraceData from '../../assets/images/embrace.png'
import heartData from '../../assets/images/heart.png'
import thinkData from '../../assets/images/think.png'
import { Link } from 'react-router-dom';


function Category(){

    return(
        <>
          <section className='category' >
             <div className='category__container'>
             <div className='category__box'>
                <img className='category__image' src={ embraceData} alt="image" /> 
               <Link to='/StressCategoryPage'><p className='category__title'>Stress & Anxiety</p></Link> 
             </div>
             <div className='category__box'>
                 <img className='category__image' src={ heartData} alt="image" /> 
                <Link to='/LoveCategoryPage'><p className='category__title'>Love & Relationship</p></Link> 
             </div>

             </div>
             <div className='category__container'>
               <div className='category__box'>
                  <img className='category__image' src={ thinkData} alt="image" /> 
                  <p className='category__title'>Depression & Negative Thinking</p>
               </div>
               <div className='category__box'>
                   <img className='category__image' src={ heartData} alt="image" /> 
                   <p className='category__title'>Motivation & Productivity</p>
               </div>
     
             </div>

          </section>
       
         
        </>
       
    )
}
export default Category;