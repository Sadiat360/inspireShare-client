import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ProfilePage.scss';

 function ProfilePage(){
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState();
    const navigate = useNavigate();

     const  getUserData = async () => {
      
         setIsLoading(true);
         try{
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/profile`,
                {
                   withCredentials: true,
                }
            );

            setUserData(data);
            setIsLoading(false)
         }catch (error){
            if(error.response && error.response.status === 401){
                setError('You must be logged in to view this page');
               

            }else{
               setError('An error occurred while fetching your profile');
            }
            setIsLoading(false)
         }
     };

     useEffect(() => {
        getUserData();
     }, []);

     const handleLogOut = async () => {
       
         try{
            console.log('checking cookies before logout:', document.cookie)
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/logOut`, {},{
               withCredentials: true
            });

            navigate('/login')
         }catch (error){
             console.error('Logout unsuccessful', error);
         } 
     };
        return(
            <main>

               <section className='profile' id='profile'>
                <div className='profile__container'>
                    <div className='profile__pic'>
                       
                    </div>

                    <div className='profile__name-wrap'>
                        <p className='profile__name'> {userData.name}</p>
                    </div>
                     <p className='profile__email'>Email: {userData.email}</p>

                     <button className='profile__btn' onClick={handleLogOut}>Log Out</button>
  
                  </div>
                  
   
               </section>

            </main>
          
        )
}
export default ProfilePage;