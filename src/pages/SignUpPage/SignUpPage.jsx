import { useState } from "react";
import { emailRegex } from "../../../lib/emailRegex/emailRgex.js";
import { nameRegex } from "../../../lib/nameRegex/nameRgex.js";
import { passwordRegex } from "../../../lib/passwordRegex/passwordRegex.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


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
                <div>
                    <img src="/image" alt="welcome image" />
                </div>

                <form onSubmit={handleOnSubmit}className="signUp__form">
                    <p>SignUp</p>
                    {successMessage && <div className="signUp__success">{successMessage}</div>}

                    <div className="signUp__form-box">
                      <label htmlFor="name">Name</label>
                      <input type="text" 
                             name='name'
                             placeholder="Please enter your name"
                             onChange={(event) => handleInputChange(event)}/>
                             {errorMessage.name && <span className="signUp__text">{errorMessage.name}</span>}
                    </div>
                    <div className="signUp__form-box">
                      <label htmlFor="email">Email</label>
                      <input type="text" 
                             name='email'
                             placeholder="Please enter your email"
                             onChange={(event) => handleInputChange(event)}/>
                             {errorMessage.email && <span className="signUp__text">{errorMessage.email}</span>}
                    </div>
                    <div className="signUp__form-box">
                      <label htmlFor="email">Password</label>
                      <input type="text" 
                             name='password'
                             placeholder="Please enter your unique password"
                             onChange={(event) => handleInputChange(event)}/>
                             {errorMessage.password && <span className="signUp__text">{errorMessage.password}</span>}
                    </div>
                
                <button>SignUp</button>
               </form>
            </div>
           

        </section>
    )
}
export default SignUpPage;