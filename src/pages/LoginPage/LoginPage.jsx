import { useState } from "react";
import { emailRegex } from "../../../lib/emailRegex/emailRgex";
import { passwordRegex } from "../../../lib/passwordRegex/passwordRegex";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

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
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`,{
            email: formData.email,
            password: formData.password
        });
        console.log('login response:', response.data);
        localStorage.setItem('authToken', data.authToken);

        setErrorMessage('');
        setSuccessMessage("Signup successful! Redirecting to Home Page...");
        setTimeout(() =>{
            navigate('/Homepage')
        }, 2000)
       }catch (error){
           setApiError(error.response?.data?.message || 'An error occurred during login')
       }

    }
    return(
        <section className="logIn cla">
            <div className="logIn__container">
                <div className="logIn__image">
                    <img src="/image" alt="log in image" />
                </div>
                <form onSubmit={handleOnSubmit} className="logIn__form" action="">

                    <p>Log In</p>
                    {successMessage && <div className="logIn__success">{successMessage}</div>}
                    <div className="logIn__form-box">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                        name="email" 
                        id="email" 
                        placeholder="please enter your email"
                        onChange={(event) =>handleInputChange(event)}/> 
                         {errorMessage.email && <span className="signUp__text">{errorMessage.email}</span>}
                    </div> 
                    <div className="logIn__form-box">
                        <label htmlFor="email">Password</label>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        placeholder="please enter your password"
                        onChange={(event) =>handleInputChange(event)}/>
                         {errorMessage.password && <span className="signUp__text">{errorMessage.password}</span>}
                    </div>
                    <button>LogIn</button>
                </form>
            </div>
        </section>
    )
}
export default LoginPage;