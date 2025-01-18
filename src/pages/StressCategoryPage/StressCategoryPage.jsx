// import  Category from '../../components/Category/Category.jsx';
import './StressCategoryPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StressCategory from '../../components/StressCategory/StressCategory';
import { Link } from 'react-router-dom';


function StressCategoryPage(props){
    const [photoDetails, setPhotoDetails] = useState([]);

    useEffect(() =>{
        async function getPhotos() {

            try{
                const response = await axios.get(' http://localhost:7000/photos/');
                console.log(response.data)
                setPhotoDetails(response.data)
    
            }catch (error){
                 console.error('Error getting photos:', error)
            }
            
        }
        getPhotos();
    }, []);
  
    return(
        <>
      
           
        {photoDetails?.map((photo)=>{
            return (<StressCategory key ={photo.id} photo={photo}/>)
         })}
          <div className='category'>
            <p className='category__start'>Lets start curating with Kindness</p>
           <Link to='/CategoryForm'><button className='category__btn'>Start</button></Link> 
          </div>
        
        
        </>
       
    )
}
export default StressCategoryPage;