import React, { useEffect, useState } from 'react'
import InputField from './InputField';
import alaram from '../assets/sounds/alarm.mp3'

const Timer = ({isOverlay}) => {
    const [isEditing, setIsEdititng] = useState(false); 
    const [minutes, setMinutes] = useState(28);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const audio = new Audio(alaram)

    useEffect(() => {
        let intervalId;
    
        if (isActive) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        if (minutes === 0 && hours === 0) {
                            audio.play()
                            clearInterval(intervalId);
                            setIsActive(false);
                            return 0;
                        } else {
                            setMinutes(prevMinutes => {
                                if (prevMinutes === 0) {
                                    setHours(prevHours => prevHours - 1);
                                    return 59;
                                } else {
                                    return prevMinutes - 1;
                                }
                            });
                            return 59;
                        }
                    }
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
    
        return () => clearInterval(intervalId);
    }, [isActive, hours, minutes, seconds]);
    
  return (
   <div className="">
    {
        isEditing ? (
           <div className="flex justify-center">
             <div>
            <InputField label={'Hours'} value={hours} onChange={(e)=> setHours(parseInt(e.target.value))} />
            <InputField label={'Minutes'} value={minutes} onChange={(e)=> setMinutes(parseInt(e.target.value))} />
            <InputField label={'Seconds'} value={seconds} onChange={(e)=> setSeconds(parseInt(e.target.value))} />
            <button className="bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-lg mt-1 ml-1" onClick={()=> setIsEdititng(false)}>&#10004;</button>
          </div>
           </div>
        ): (
          <div className="">
              <div className="flex justify-center items-center">
                <h1 className='text-green-500 text-5xl'>{`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2, "0")}`}</h1>
            </div>
            <div className="timer-buttons text-stone-500 flex justify-center gap-5 bg-black bg-opacity-30 rounded-xl">
                {
                    isActive ? (
                        <>
                        <button className="start text-5xl text-yellow-500 m-2 font-bold" onClick={()=> setIsActive(false)}>||</button>
                        <button className="start text-5xl text-red-500 m-2" onClick={()=> {setIsActive(false)
                             setHours(0)
                             setMinutes(1)
                             setSeconds(0)
                        }}>
                            &#9632;
                        </button>
                        </>
                    ): (
                       <>
                        <button className="start text-5xl text-green-500 m-2" onClick={()=> setIsActive(true)}>&#9658;</button>
                        <button className="start text-4xl text-yellow-500 m-2 " onClick={()=> setIsEdititng(true)}>&#9998;</button>
                       </>
                    )
                }
            </div>
          </div>
        )
    }
    
   </div>
  )
}

export default Timer
