import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import muiscBar from '../../assets/images/musicBar.png'
import './CardPage.scss'
import PlayIcon from "../../components/PlayIcon/PlayIcon";
import MailIcon from "../../components/MailIcon/MailIcon";
import clickOne from '../../assets/icons/click1.png'
 
import axios from 'axios';
// const jwt_decode = require('jwt-decode');



function CardPage(){
    // const [streaks, setStreaks] = useState([]);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState([]);
    
    const [formData, setFormData] = useState(null);
    console.log(formData);



    useEffect(() =>{
          const savedData = localStorage.getItem('formData'); /// i used loclal storage to get form data inputs beacsue it was stored locally when users click submit 
          if(savedData){
            setFormData(JSON.parse(savedData));
          }
    }, []);

    if (!formData){
        return(
            <div>
                <p>No Data found. Please return to Category form and submit your curated data</p>
                <button onClick={() => navigate ('/CategoryForm')}>Back</button>
            </div>
        )
    }

    // const somePayload =formData;

   
        async function getUserData() {
            const authToken =localStorage.getItem('authToken');
            console.log('what authToken:', authToken)
            
            try{
                const response = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/users/profile`,
                    {
                        headers: {
                            Authorisation: `Bearer ${authToken}`,
                        },
                    }
                );
                console.log('what is userdata:', response.data)

                setUserData(response.data.authToken);
            }catch (error){
                 if (error.status === 401){
                    setError('You must be logged in to view this page')
                 }
            }
            
        } 
        getUserData();
        // useEffect(()=>{
           
        // }, [])

        // async function postStreak(){
        //      const userId = getUserData();
        //      if(!userId){
        //         console.error('User not authorized');
        //         return;
        //      }

        //     const token =localStorage.getItem('authToken')
        //     try{
        //         const response = await axios.post(`http://localhost:7000/streaks/profile/${userId}`,
        //             {data: somePayload},
        //             {headers: {Authorization: `Bearer ${token}`}}
        //         );
        //         console.log('streak response:', response.data);
        //         setStreaks(response.data)
        //     }catch(error){
        //         console.error('Error posting streak:', error)
        //     }
           
        // }
        // postStreak();
       
  
    const {image, musicLink, quote} = formData;
    const handleDownloadPDF = () => {
      
        const element = document.querySelector('.card__container');

        html2canvas(element,{ scale: 2}).then((canvas) =>{
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG',0,0, imgWidth,imgHeight);

               // Fetch music link from formData
        const musicLink = formData?.musicLink;

        // Add clickable music link
        if (musicLink) {
            pdf.textWithLink('Click to listen to the music', 10, imgHeight + 10, {
                url: musicLink,
            });
        }

            pdf.save("styled_card.pdf");
        });
     
      
    }
    return(
        <>
        <section className="card">
            <h2>Why caring for others is important?</h2>
          <p className="card__title">Caring for others is essential for building stronger communities, promoting emotional well-being, and fostering personal growth. Acts of kindness create bonds of trust and support, leading to a sense of belonging and happiness for both the giver and receiver. It also strengthens reciprocal relationships, helps address social inequalities, and instills a sense of purpose. By caring for others, we build resilience during challenging times and contribute to a more compassionate, fair, and interconnected society. Ultimately, caring for others enriches our lives and reminds us of the importance of empathy and shared humanity.</p>
       
           <div className="card__container">
              <p className="card__caption">Virtual hug just for you</p>
              <div className="card__image-box">
                  
                  <img  className="card__image" src={image} alt="image" />
                  {/* <img src=" alt="" ></img> */}
  
              </div>
              <div className="card__quote">
                  <p>A lovely message for you:</p>
                  <ul className="card__quote-wrap">
                     <MailIcon/>
                     <p className="card__quote-text">{quote}</p>
                  </ul>
                  
  
              </div>
              <div className="card__musicLink">
                 <div className="card__musicLink-frame">
                   <img className="card__musicBar" src={muiscBar} alt="music bar" />
                   <ul className="card__item">
                    <li className="card__list">0:30</li>
                    <PlayIcon/>
                    <li className="card__list">1:30</li>
                   </ul>
                  </div>
                 <div className="card__linkBox">
                   
                    {/* <a className='card__youTubeLink'href={musicLink} target='_blank' rel='noopener noreferrer'>{musicLink}</a> */}
                    {/* <p>{musicLink}</p> */}

                    <p className="card__plug">Plug your earphones in and listen</p> 
                    <img className="card__icon" src={clickOne} alt="icon" />
                 </div>
                  
                 
                </div>
              
              

            </div>
            <div className="card__btn-box">
              <button className="card__btn-bck" onClick={() => navigate('/CategoryForm')}>Back to Form</button>
              <button  className="card__btn" onClick={handleDownloadPDF}>Download</button>
            </div>

          
         

        </section>
      


        
        </>
    )
}
export default CardPage;