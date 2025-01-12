import './FaqQuestion.scss';
import { useState } from "react";
import DropdownArrow from "../DropdownArrow/DropdownArrow";


function FaqQuestion({faqQuestion}){

    const [isOpenAnswer, setIsOpenAnswer] = useState([false]);

    const handleToggleAnswer = () => {
        setIsOpenAnswer((prev) => !prev);
    };

    return(
            <>
             <div className="faq__header" onClick={handleToggleAnswer}>
                   <DropdownArrow isOpen={isOpenAnswer}/>
                    <h4 className='faq__header header__question'>{faqQuestion.question}</h4>
                    
             </div>

            {isOpenAnswer === true ? (
             <div>
                     <p>{faqQuestion.answer}</p>
                 </div>
            ): null}
          
            </>
    )
}
export default FaqQuestion;