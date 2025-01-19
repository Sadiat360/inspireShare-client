import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ProfilePage.scss';

 function ProfilePage(){
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

     const  getUserData = async () => {
        const authToken = localStorage.getItem('authToken');
         try{
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/profile`,
                {
                    headers:{
                        authorisation: `Bearer ${authToken}`,
                    },
                }
            );

            setUserData(data);
            setIsLoading(false)
         }catch (error){
            if(error.status === 401){
                setError('You must be logged in to view this page');
                setIsLoading(false)

            }
         }
     };

     useEffect(() => {
        getUserData();
     }, []);

     const handleLogOut = () => {
        localStorage.removeItem("authToken");
        navigate('/')
     }
        return(
            <main>

               <section className='profile'>
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