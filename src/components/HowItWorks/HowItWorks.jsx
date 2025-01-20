import './HowItWorks.scss'
import trackData from '../../assets/images/track.png'
import howImage from '../../assets/images/how.png'

function HowItWorks(){
    return(
        <section className='howItWorks'>
            <h2 className='howItWorks__heading'>How it Works</h2>
            <div className='howItWorks__frame'>

                <div className='howItWorks__wrap'>
                 <img className='howItWorks__pic'src={howImage} alt="image" />

                </div>
                
                <div className='howItWorks__container'>
                    <div className='howItWorks__image-wrap'>
                      <img className='howItWorks__image' src={trackData} alt="image" />
                    </div>
                   
                    <div className='howItWorks__box'>
                        <ul className='howItWorks__item'>
                            <li className='howItWorks__list'>Choose a category</li>
                            <li className='howItWorks__list-txt'>A category or mood that best describes the emotional state of who you want to support</li>
                        </ul>
                        <ul className='howItWorks__item'>
                            <li className='howItWorks__list'>Ways to help</li>
                            <li className='howItWorks__list-txt'>See ways the personalised solutions can help our emotional state</li>
                        </ul>
                        <ul className='howItWorks__item'>
                            <li className='howItWorks__list'>Start curating your card</li>
                            <li className='howItWorks__list-txt'>You can add your own personalised image, add a music link and select a quote from our quote library</li>
                        </ul>
                        <ul className='howItWorks__item'>
                            <li className='howItWorks__list'>Download your card</li>
                            <li className='howItWorks__list-txt'>A category or mood that best describes the emotional state of who you want to support</li>
                        </ul>

                    </div>
                </div>
                </div>
           
        </section>
    )
}
export default HowItWorks;