import { useState } from "react";
import {useStreak} from'./streakContext';

function StreakPage(){
    const {streakCount} = useStreak();
    // const [downloadCount, setDownloadCount] = useState(0);



    return(
       <section className="streak">
        <div>
            <h1>Here is your kindness milestone</h1>
            <p>Your current streak: {streakCount} {streakCount === 1 ? 'day' : 'days'}</p>
        </div>
       
       </section>
    )
}
export default StreakPage;