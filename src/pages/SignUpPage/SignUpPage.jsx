import { useState } from "react";
import { emailRegex } from "../../../lib/emailRegex/emailRgex.js";
import { nameRegex } from "../../../lib/nameRegex/nameRgex.js";
import { passwordRegex } from "../../../lib/passwordRegex/passwordRegex.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import signUpData from '../../assets/images/signUp-image.png'
import axios from 'axios'
import './SignUpPage.scss'



function SignUpPage(){
    const [successMessage, setSuccessMessage] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [apiError, setApiError] = useState("");
   function handleInputChange(event){ 
    setFormData({...formData, [event.target.name]: event.target.value});
    }
    const validateForm =() =>{
         const newErrors = { name: '', email: '', password: ''}
         let isFormValid = true;
        if(!formData.name){
            newErrors.name = 'name is required';
            isFormValid = false;
        }else if (!nameRegex.test(formData.name)){
            newErrors.name = 'Name must contain only letters';
            isFormValid = false;
        }

        if (!formData.email){
            newErrors.email = 'email address is required';
            isFormValid = false;
        }else if (!emailRegex.test(formData.email)){
              newErrors.email = 'Please enter a valid Email'
              isFormValid = false;
        }
        if(!formData.password){
            newErrors.password = 'password is required';
            isFormValid = false;
        }else if(!passwordRegex.test(formData.password)){
            newErrors.password = 'Password lenght must be 8 and a unique character';
            isFormValid = false;
        }
        setErrorMessage(newErrors);
        return isFormValid;
    }
  
    const handleOnSubmit = async (event) =>{
        event.preventDefault();
        console.log('Button clicked:')
        if(!validateForm()) return;
        // setLoading(true);
        setApiError(""); 

      try{
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`,{
           name: formData.name,
           email: formData.email,
           password: formData.password, 
        });
        console.log('signup response:', response.data);
        setErrorMessage('');
        setSuccessMessage("Signup successful! Redirecting to login...");
        setTimeout(() =>{
            navigate('/login')
        }, 2000)

      }catch (error){
        setApiError(error.response?.data?.message || 'An error occurred during signup ')
      }

    }
    return(
        <section className="signUp">
            <div className="signUp__container">
                <div className="signUp__image-wrap">
                    <img className="signUp__image" src={signUpData} alt="welcome image" />
                    <article className="signUp__content-box">
                        <p className="signUp__content">Kindness is a powerful force that can brighten someone's day, uplift spirits, and create a ripple effect of positivity in the world</p>
                        <h3 className="signUp__caption">Remember to inspire someone today</h3>
                    </article>
                   
                </div>

                <form onSubmit={handleOnSubmit}className="signUp__form">
                    <p>SignUp</p>
                    {successMessage && <div className="signUp__success">{successMessage}</div>}

                    <div className="signUp__form-box">
                      <label className="signUp__label" htmlFor="name">Name</label>
                      <input className="signUp__input" type="text" 
                             name='name'
                             placeholder="Enter your name"
                             onChange={(event) => handleInputChange(event)}/>
                             {errorMessage.name && <span className="signUp__text">{errorMessage.name}</span>}
                    </div>
                    <div className="signUp__form-box">
                      <label className="signUp__label" htmlFor="email">Email</label>
                      <input className="signUp__input" type="text" 
                             name='email'
                             placeholder="Enter your email"
                             onChange={(event) => handleInputChange(event)}/>
                             {errorMessage.email && <span className="signUp__text">{errorMessage.email}</span>}
                    </div>
                    <div className="signUp__form-box">
                      <label className="signUp__label" htmlFor="email">Password</label>
                      <input className="signUp__input" type="text" 
                             name='password'
                             placeholder="Enter your unique password"
                             onChange={(event) => handleInputChange(event)}/>
                               {errorMessage.password && <span className="signUp__text">{errorMessage.password}</span>}
                             <p className="signUp__txt">Must be at least 8 characters</p>
                           
                    </div>
                
                   <button className="signUp__btn">Create  account</button>
                  <u className="signUp__list">
                  <p>Already have an account?</p><Link to='/login'><span>Log In</span></Link>
                 </u> 
               </form>
            </div>
           

        </section>
    )
}
export default SignUpPage;