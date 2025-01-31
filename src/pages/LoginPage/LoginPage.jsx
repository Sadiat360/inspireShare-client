import { useState } from "react";
import { emailRegex } from "../../../lib/emailRegex/emailRgex";
import { passwordRegex } from "../../../lib/passwordRegex/passwordRegex";
import { useNavigate } from "react-router-dom";
import signUpData from '../../assets/images/signUp-image.png'
import { Link } from "react-router-dom";
import axios from 'axios'
import './LoginPage.scss'

function LoginPage(){
    const [successMessage,setSuccessMessage] = useState(false)
    const [apiError, setApiError] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: ''
    });
    const [formData, setFormData] = useState({
        email:'',
        password: '',
    });

    const handleInputChange = (event)=>{
        setFormData({...formData,[event.target.name]: event.target.value});
    }
    const validateForm =() =>{
        const newErrors = { email: '', password: ''}
        let isFormValid = true;

        if(!formData.email){
            newErrors.email = 'Email is required'
            isFormValid = false;
        }else if (!emailRegex.test(formData.email)){
            newErrors.email = 'Please enter a valid Email'
            isFormValid = false;
        }
        if(!formData.password){
            newErrors.password = 'Password is required'
            isFormValid = false;
        }else if(!passwordRegex.test(formData.password)){
            newErrors.password = 'Password lenght must be 8 and a unique character'
            isFormValid = false;
        }
             
        setErrorMessage(newErrors);
        return isFormValid;

    }
    const handleOnSubmit = async (event) =>{
        event.preventDefault();
       if(!validateForm())return;
       setApiError("");

       try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`,{
            email: formData.email,
            password: formData.password
        },
        {
            withCredentials: true
        }
    );
        console.log('login response:', data);
        console.log('Cookies sent:', document.cookie);
        // localStorage.setItem('authToken', data.token);
        // console.log('auth Token stored:', localStorage.getItem(data.token));

        setErrorMessage('');
        setSuccessMessage("Log In successful! Redirecting to Home Page...");
        setTimeout(() =>{
            navigate('/Homepage')
        }, 2000)
       }catch (error){
           setApiError(error.response?.data?.message || 'An error occurred during login')
       }

    }
    return(
        <section className="logIn">
            <div className="logIn__container">
                <div className="logIn__image-wrap">
                    <img  className="signUp__image" src={signUpData} alt="log in image" />
                    <article className="signUp__content-box">
                       <h1 className="logIn__caption">Welcome to InspireShare</h1>
                        <p className="logIn__content">Are you ready to Inspire someone today? </p>
                        
                    </article>
                </div>
                <form onSubmit={handleOnSubmit} className="logIn__form" action="">

                    <p className="logIn__heading">Log In</p>
                    {successMessage && <div className="logIn__success">{successMessage}</div>}
                    <div className="logIn__form-box">
                        <label  className="logIn__label" htmlFor="email">Email</label>
                        <input className="logIn__input" type="text" 
                          name="email" 
                          id="email" 
                          placeholder="Enter your email"
                          onChange={(event) =>handleInputChange(event)}/> 
                         {errorMessage.email && <span className="signUp__text">{errorMessage.email}</span>}
                    </div> 
                    <div className="logIn__form-box">
                        <label className="logIn__label" htmlFor="email">Password</label>
                        <input  className="logIn__input"
                         type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter your password"
                        onChange={(event) =>handleInputChange(event)}/>
                         {errorMessage.password && <span className="signUp__text">{errorMessage.password}</span>}
                    </div>
                    <button className="logIn__btn">LogIn</button>
                    <u className="logIn__list">
                     <p>Don't have an account?</p><Link to='/'><span>Create an account</span></Link>
                    </u> 
                </form>
            </div>
        </section>
    )
}
export default LoginPage;