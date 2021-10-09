import { useEffect, useState } from 'react';

export const Timer = ({setStop, questionNumber}) => {
    const [timer, setTimer] = useState(120);
    
    useEffect(()=>{
        if(timer === 0)return setStop(true);
        const interval = setInterval(() => {
            setTimer(prev=>prev-1); 
        }, 1000);
        return () => clearInterval(interval);
    },[setStop, timer]);

    useEffect(()=>{
        setTimer(120);
    },[questionNumber])
    return (
        timer
    )
}
