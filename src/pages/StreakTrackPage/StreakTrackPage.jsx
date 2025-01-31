import React from "react";
import { useStreak } from "../../StreakContext/StreakContext.jsx";
import plantData from '../../assets/images/plant.png'
import streakFire from '../../assets/images/streakFire.png'
import './StreakTrackPage.scss'
function StreakTrackPage(){
    const {streakCount} = useStreak();
    console.log('Current Streak Count:', streakCount);
    localStorage.getItem(streakCount);
    
    return(
        <section className="streak" id="streak">
            <div className="streak__container">
                <div className="streak__image-wrap">
                  <img className="streak__image" src={plantData} alt="image" />
                </div>
               
               <h2 className="streak__text">Your Kindness counts</h2>
               <div className="streak__box">
                  <p className="streak__number"> {streakCount} downloads streak!</p>

                  <img className="streak__fire" src={streakFire} alt="image" />
               </div>
              <p className="streak__share">Keep sharing, Keep inspiring</p>
            </div>
            
          
        </section>
    )
}
export default StreakTrackPage;