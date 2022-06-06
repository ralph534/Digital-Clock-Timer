import React, {useEffect, useState} from 'react'
import './timer.css'

export const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    var timer;
    useEffect(() => {
      
       timer = setInterval(() => {
            setSeconds(seconds + 1);

            if(seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0)
            }
        }, 1000)

        return () => clearInterval(timer)
    })

    const reset = () => {
       setSeconds(0)
       setMinutes(0)
    }

    const stop = () => {
       clearInterval(timer)
    }

    const resume = () => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);

            if(seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0)
            }
        }, 1000)

    }

  return (
      <>
    <div className='timer'>
        <p>{minutes<10 ? "0" + minutes : minutes} : {seconds<10 ? "0" + seconds: seconds}</p>
    </div>
     <div className="options">
        <button className="restart" onClick={reset}>Restart</button>
        <button className="stop"onClick={stop}>Stop</button>
        <button onClick={resume}>Resume</button>
    </div>
    </>
  )
}

export default Timer;