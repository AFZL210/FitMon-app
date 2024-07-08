import React from 'react'
import '../css/MiniStats.css'
import calorieIcn from '../media/calories.png'

const MiniStatCard = ({imgSrc,newId,text}) => {
  return (
    <div className="stats-item">
              <img id={newId} className='stats-icn' src={imgSrc} alt="" />
              <h3>{text}</h3>
            </div>
  )
}

export default MiniStatCard