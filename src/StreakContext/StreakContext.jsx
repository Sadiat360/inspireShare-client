import React, {createContext, useState, useContext, useEffect} from "react";

const StreakContext = createContext();

export const StreakProvider = ({children}) => {
        const [streakCount, setStreakCount] = useState(() => {
        const savedStreak = localStorage.getItem('streakCount');
        return savedStreak ? Number(savedStreak) : 0;
    });

    const incrementStreak = () => {
        setStreakCount((prev) => {
            const newCount = prev + 1;
            localStorage.setItem('streakCount',newCount )
           return newCount;
        });
    };

    useEffect(() => {
        localStorage.setItem('streakCount', streakCount);
        // localStorage.removeItem('streakCount', streakCount)
    }, [streakCount]);

    return(
        <StreakContext.Provider value={{streakCount, incrementStreak}}>
            {children}
        </StreakContext.Provider>
    )
}

export const useStreak = () => useContext(StreakContext);
  if(!StreakContext){
    throw new Error('useStreak must be within a streak provider')
  }