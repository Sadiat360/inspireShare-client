function StressCategory({photo}){

    return(
        <section className='music' >
            <div className="music__block">
               <div className='music__box'>
                   <h2 className='music__title'>{photo.title}</h2>
                   <p className='music__text'>{photo.description}</p>
               </div>
               <div className='music__image-container'>
                   <img  className='music__image'src={`http://localhost:7000/images/${photo.photo}`} alt="image" />
               </div>
            </div>
          
        </section>
    )
}

export default StressCategory;