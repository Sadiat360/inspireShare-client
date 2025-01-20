import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './categoryForm.scss'
import axios from 'axios';


function categoryForm() {
    const [stressQuote, setStressQuote] = useState([]);
    const[preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        image: null,
        musicLink: '',
        quote: '',
    });
    const navigate = useNavigate();
    
   
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);

                setFormData({... formData, image: reader.result});
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleMusicLinkChange = (event) => {
        const value = event.target.value;
        setFormData({ ...formData, musicLink: value});
        if (!isValidMusicLink(value)) {
            setError('Please enter a valid music link')
        } else{
            setError('');
        }
    }
    const isValidMusicLink = (url) => {
        const musicPlatformsRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|spotify\.com|soundcloud\.com)\/.+$/;
        return musicPlatformsRegex.test(url);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsSubmitting(true);
        try{
            if (!formData.image || !formData.musicLink || !formData.quote) {
                alert('Please fill in all fields before submitting.');
                return;
            }
            if (error) {
                alert('Please fix the errors before submitting.');
                return;
            }
            localStorage.setItem('formData', JSON.stringify(formData));
              navigate('/CardPage'); 
        }catch{
            alert ('An error occured while saving form')
        }
      
    }    
    const getVideoId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const matches = url.match(regex);
        return matches && matches[1];
    };
    useEffect(()=>{
        async function getStressQuote() {
            const response = await axios.get('http://localhost:7000/stressQuote');
            console.log('This is stress quote:', response.data)
            setStressQuote( response.data)
            
        }
        getStressQuote();
    
    
    }, []);

   

    return(

        <section className="curate">

            <form className="curate__container" onSubmit={handleSubmit}>

              <div className="curate__header">
                  <h3 className="curate__txt">"Helping others is the way we help ourselves." – Oprah Winfrey</h3>
              </div>

         
             < div className="curate__form" >

               <div className="curate__form-wrap">
                   <label className="curate__form-label" htmlFor="name">Upload Image:</label>
                   <input  className="curate__form-input" 
                          type="file"
                          onChange={handleFileChange} 
                          accept='image/*'
                          style={{display: 'block', marginBottom:'10px'}}
                     />
                     {preview && (
                       <img src={preview} 
                       alt="preview"
                       style={{ width: '150px', height: 'auto', borderRadius: '10px' }}
                     />
                     )}
               </div>
               <div className="curate__music">
                   <label className="curate__form-label" htmlFor="musciLink">Music Link (YouTube, Spotify, or SoundCloud):</label>
                   <input className="curate__form-input"
                          type="text"
                          name="musicLink" 
                          value={formData.musicLink}
                          onChange={handleMusicLinkChange}
                   />
                   {error && <p style={{color:'red'}}>{error}</p>}
                   {/* <a href="https://youtube.com"><YouTubeIcon/></a> */}
                   {/* {formData.musicLink && !error && <YouTubeMusicEmbed videoUrl={formData.musicLink} />} */}

                   
               </div>
             
               <div className="curate__quote">
                   <label  className="curate__form-label">Select a quote:</label>
                   <select className="curate__form-input"
                       name="quote"
                       value={formData.quote}
                       onChange={handleInputChange}
                   >
                   {stressQuote.map((stress) =>
                      <option key={stress.id} value={stress.message}>{stress.title}</option>
                   )} 
                   </select>
               </div>
                 <button className="curate__btn" type="submit" disabled={!!error}>Submit
                    
                 </button>

               </div>

            </form>

          
        </section>
    )
}
export default categoryForm;