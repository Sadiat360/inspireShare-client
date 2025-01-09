import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import YouTube from 'react-youtube';

function categoryForm() {

    const[preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        image: null,
        musicLink: '',
        quote: '',
    });

    const [audioSrc, setAudioSrc] = useState('')
    const [error, setError] = useState('');

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
    const handleMusicFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
            const audioUrl = URL.createObjectURL(file);
            setAudioSrc(audioUrl);
            setError('');
        }
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
        if (!formData.image || !formData.musicLink || !formData.quote) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        if (error) {
            alert('Please fix the errors before submitting.');
            return;
        }
        localStorage.setItem('formData', JSON.stringify(formData));
          navigate('/CardPage'); // Navigate to Template page
    };
  




    return(
        <form action="">

            <div>
                <label htmlFor="name">Upload Image:</label>
                <input type="file"
                       onChange={handleFileChange} 
                       accept='image/*'
                       style={{display: 'block', marginBottom:'10px'}}
                  />
                  {preview && (
                    <img src={preview} 
                    alt="preview"
                    style={{ width: '100px', height: 'auto', borderRadius: '10px' }}
                  />
                  )}
            </div>
            <div>
                <label htmlFor="">Music Link (YouTube, Spotify, or SoundCloud):</label>
                <input type="text"
                       name="musicLink" 
                       value={formData.musicLink}
                       onChange={handleMusicLinkChange}
                />
                {error && <p style={{color:'red'}}>{error}</p>}
                {formData.musicLink && !error && <YouTubeMusicEmbed videoUrl={formData.musicLink} />}

                
            </div>
            <div>
                <label>Upload Audio File:</label>
                <input type="file" accept="audio/*" onChange={handleMusicFileChange} />
                {audioSrc && (
                    <audio controls>
                        <source src={audioSrc} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                )}
            </div>
            <div>
                <label>Quote:</label>
                <textarea
                    name="quote"
                    value={formData.quote}
                    onChange={handleInputChange}
                ></textarea>
            </div>
              <button type="submit" disabled={!!error}>Submit</button>

        </form>
    )
}
export default categoryForm;