import react, { useEffect, useState } from 'react';

const StopWatch=()=>{
    const[timerOn,setTimeron]=useState(false)
    const[time,setTime]=useState(0)
    const fetchtime=(time)=>{
        let min=Math.floor(time/60);
        let sec=time%60;
        return `${min}:${sec<10?"0":""}${sec}`;
    }

    const handlereset=()=>{
        setTime(0);
   
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
    },[timerOn,time])
    return(
        <>
        <h1>StopWatch</h1>
        <p>Time: {fetchtime(time)}</p>
        <button onClick={()=>setTimeron(!timerOn)}>{timerOn ?"Stop":"Start"}</button>
        <button onClick={()=>handlereset()}>Reset</button>
        </>
    )
}

export default StopWatch


// import { useState, useEffect } from "react";
// import React from "react";

// const Timer = () => {
//   const [timer, setTimer] = useState(0);
//   const [flag, setFlag] = useState(false);

//   const handleStart = () => {
//     setFlag((prev) => !prev);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   const handleReset = () => {
//     setTimer(0);
//   };
//   useEffect(() => {
//     let timerId;
//     if (flag) {
//       timerId = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);
//     } else {
//       clearInterval(timerId);
//     }
//     return () => {
//       clearInterval(timerId);
//     };
//   }, [flag,timer]);

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <div style={{ paddingBottom: "15px" }}>Time: {formatTime(timer)}</div>
//       <button onClick={handleStart}>{flag ? "Stop" : "Start"}</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default Timer;