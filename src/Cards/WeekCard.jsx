import React from 'react'
import '../css/WeekCard.css'


const WeekCard = ({imgSrc,text,newId}) => {
  return (
    <div id={newId} className="week">
          <h2>{text}</h2>
          <img className='week-icn' src={imgSrc} alt="" />
        </div>

  )
}

export default WeekCard