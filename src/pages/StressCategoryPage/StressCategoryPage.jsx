// import  Category from '../../components/Category/Category.jsx';
import './StressCategoryPage.scss';
import musicData from '../../assets/images/musicImage.png';
import beachData from '../../assets/images/beachImage.png'

function StressCategoryPage(){
    return(
        <>
            <section className='music' >
            <div className='music__box'>
                <h2 className='music__title'>Why is music important to our emotional well being?</h2>
                <p className='music__text'>Music supports emotional well-being by reducing stress, improving mood, and fostering connection. It enhances mental health, creativity, and relaxation.</p>
            </div>
            <div className='music__image-container'>
                <img  className='music__image'src={musicData} alt="image" />
            </div>
            

        </section>
        <section className='music' >
            <div className='music__box'>
                <h2 className='music__title'>Why add an image?</h2>
                <p className='music__text'>Viewing beautiful or nostalgic images can boost happiness and reduce stress by releasing dopamine, which promotes pleasure and relaxation. These images also enhance self-esteem and emotional well-being, fostering a sense of connection.</p>
            </div>
            <div className='music__image-container'>
                <img  className='music__image'src={beachData} alt="image" />
            </div>
            

        </section>
        <section className='music' >
            <div className='music__box'>
                <h2 className='music__title'>Why is music important to our emotional well being?</h2>
                <p className='music__text'>Music supports emotional well-being by reducing stress, improving mood, and fostering connection. It enhances mental health, creativity, and relaxation.</p>
            </div>
            <div className='music__image-container'>
                <img  className='music__image'src={musicData} alt="image" />
            </div>
            

        </section>
        </>
       
    )
}
export default StressCategoryPage;