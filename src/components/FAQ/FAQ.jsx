import couchData from '../../assets/images/couch.png';
import { useEffect, useState } from 'react';
import axios from 'axios'
import FaqQuestion from '../FaqQuestion/FaqQuestion';
import recData from '../../assets/images/rec.png'
import './FAQ.scss'

function FAQ(){
    const [faqQuestions, setFaqQuestions] = useState([]);

    useEffect(() =>{
        async function getFaqQuestions() {
            const response = await axios.get('http://localhost:7000/faq')
            console.log('these are faq:', response.data);
            setFaqQuestions(response.data);
            
        }
        getFaqQuestions()
    }, []);
    return(
        <section className="faq">

            <div className="faq__box">
                <h2>FAQ about how to show Emotional support</h2>
              {faqQuestions.map((faqQuestion) => {
                return( <FaqQuestion key={faqQuestion.id} faqQuestion={faqQuestion} />)
              })}  
               
            </div>
            <div className='faq__image-container'>
                <img className='faq__image' src={couchData} alt="couch image" />
               <div className='faq__rec-img'>
                 <img className='faq__rec' src={recData} alt="image" />
                </div> 
            </div>

        </section>
    )
}
export default FAQ;