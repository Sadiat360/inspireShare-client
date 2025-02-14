import couchData from '../../assets/images/couch.png';
import { useEffect, useState } from 'react';
import axios from 'axios'
import FaqQuestion from '../FaqQuestion/FaqQuestion';
import faqimgData from '../../assets/images/faqimg.png'
import './FAQ.scss'

function FAQ(){
    const [faqQuestions, setFaqQuestions] = useState([]);

    useEffect(() =>{
        async function getFaqQuestions() {
            const response = await axios.get('https://inspireshare-d06d7caff3c9.herokuapp.com/faq')
            console.log('these are faq:', response.data);
            setFaqQuestions(response.data);
            
        }
        getFaqQuestions()
    }, []);
    return(
        <section className="faq">

            <div className="faq__box">
                <h2 className='faq__txt'>FAQ about how to show Emotional support</h2>
              {faqQuestions.map((faqQuestion) => {
                return( <FaqQuestion key={faqQuestion.id} faqQuestion={faqQuestion} />)
              })}  
               
            </div>
            <div className='faq__image-container'>
                <img className='faq__image' src={faqimgData} alt="couch image" />
               <div className='faq__empty'>
                </div> 
            </div>

        </section>
    )
}
export default FAQ;