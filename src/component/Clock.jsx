import React, {useState} from 'react'
import './clock.css'

export const Clock = () => {
    const time = new Date().toLocaleTimeString()

  const [currentTime, setTime] = useState(time);

  const updateTime = () => {
     let time = new Date().toLocaleTimeString();
     setTime(time)
  }
  setInterval(updateTime, 1000);
  return (
    <div className='clock'>
        <p>{currentTime}</p>
    </div>
  )
}

export default Clock;