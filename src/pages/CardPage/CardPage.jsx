import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import muiscBar from '../../assets/images/musicBar.png'
import './CardPage.scss'
import playVector from '../../assets/images/playVector.png'
import MailIcon from "../../components/MailIcon/MailIcon";
import clickOne from '../../assets/icons/click1.png'
import { useStreak } from "../../StreakContext/StreakContext";
import circleData from '../../assets/images/circle.png'





function CardPage(){
    const navigate = useNavigate();
    const [error, setError] = useState([]);
    const [formData, setFormData] = useState(null);
    console.log(formData);
    const {incrementStreak} = useStreak();



    useEffect(() =>{
          const savedData = localStorage.getItem('formData'); 
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



    const {image, musicLink, quote} = formData;
    const handleDownloadPDF = () => {
        incrementStreak();
        console.log('Streak incremented');
        
        const element = document.querySelector('.card__container');

        html2canvas(element,{ scale: 2}).then((canvas) =>{
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG',0,0, imgWidth,imgHeight);

            const musicLink = formData?.musicLink;

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
      
           <div className="card__container">
              <p className="card__caption">Virtual hug just for you</p>
              <div className="card__circle-frame">
                <img className="card__circle" src={circleData} alt="image" />
              </div>
              <div className="card__imgwrap">
                  <img  className="card__img" src={image} alt="image" />
              </div>
              <div className="card__quote">
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
                    <img className='card__play'src={playVector} alt="" />
                    <li className="card__list">1:30</li>
                   </ul>
                  </div>
                 <div className="card__linkBox">

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