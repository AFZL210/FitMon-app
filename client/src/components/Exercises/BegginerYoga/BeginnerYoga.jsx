import React from 'react'
import '../../../css/BegginerYoga.css'
import lockIcn from '../../../media/lock.png'
import checkIcn from '../../../media/checked.png'
import WeekCard from '../../../Cards/WeekCard'
import DayCard from '../../../Cards/DayCard'



const BeginnerYoga = () => {
  return (
    <div className="beg-container">
      <div className="top-row">
        <WeekCard text="WEEK - 1" imgSrc={checkIcn}/>
        <WeekCard text="WEEK - 2" imgSrc={lockIcn} newId="lock"/>
        <WeekCard text="WEEK - 3" imgSrc={lockIcn} newId="lock"/>
        <WeekCard text="WEEK - 4" imgSrc={lockIcn} newId="lock"/>
      </div>
      <div className="bottom-row">
        <DayCard time="15 Minutes" day="Day-1"/>
      </div>
    </div>
  )
}

export default BeginnerYoga