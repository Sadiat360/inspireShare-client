import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from 'jspdf';


function CardPage(){
   const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    console.log(formData);

    useEffect(() =>{
          const savedData = localStorage.getItem('formaData'); /// i used loclal storage to get form data inputs beacsue it was stored locally when users clikc submit 
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
        const doc = new jsPDF();

        doc.text('Quote:', 10,10);
        doc.text(quote, 10, 20);

        doc.text('Music Link:', 10,30);
        doc.text(musicLink,10,40);

        const img = new Image();
        img.src = image;
        img.onload = () => {
            doc.addImage(img, 'JPEG', 10,50,100,160);

            doc.save('card.pdf');
        };
    }
    return(
        <>
        <section className="card">
          <p>Card Page</p>

          <div className="card__container">
            <div className="card__quote">
                <p>Quote:</p>
                <p>{quote}</p>

            </div>
            <div className="card__musicLink">
                <p>Music Link:</p>
                <a href={musicLink} target='_blank' rel='noopener noreferrer'>{musicLink}</a>
                {/* <p>{musicLink}</p> */}

            </div>
            <div className="card__image">
                <p>Image:</p>
                <img src={image} alt="image" />
                {/* <img src=" alt="" ></img> */}

            </div>


          </div>
          <button onClick={() => navigate('/CategoryForm')}>Back to Form</button>

          <button onClick={handleDownloadPDF}>Download</button>

        </section>
      


        
        </>
    )
}
export default CardPage;