import react, { useEffect, useState } from 'react';

const StopWatch=()=>{
    const[timerOn,setTimeron]=useState(false)
    const[time,setTime]=useState(0)
    const fetchtime=(time)=>{
        let min=Math.floor(time/60);
        let sec=Math.floor(time%60);
        return `${min}:${sec<10?"0":""}${sec}`;
    }

    const handlereset=()=>{
        setTime(0);
        setTimeron(!timerOn);
    }

    useEffect(()=>{
        let timerId;
        if (timerOn) {
          timerId = setInterval(() => {
            setTime((prev) => prev + 1);
          }, 1000);
        } else {
          clearInterval(timerId);
        }
        return(()=>{
             clearInterval(timerId);
        })
    })
    return(
        <>
        <h1>StopWatch</h1>
        <p>Time:{fetchtime(time)}</p>
        <button onClick={()=>setTimeron(!timerOn)}>{timerOn ?"Stop":"Start"}</button>
        <button onClick={()=>handlereset()}>Reset</button>
        </>
    )
}

export default StopWatch