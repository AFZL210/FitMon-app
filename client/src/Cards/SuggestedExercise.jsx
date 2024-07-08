import React from 'react'
import '../css/SuggestedExercise.css'
import {Link} from 'react-router-dom'
import CalorieIcn from '../media/calories.png'
import playIcn from '../media/play.png'

const SuggestedExercise = ({exerciseIcn,name,path,time,calorieCnt,userEmail}) => {
  return (
    <div className="suggested-exercise-container">
        <div className="icn-container">
            <img className='exIcn' src={exerciseIcn} alt="" />
            <h3  className='exname'>{name}</h3>
        </div>

        <div className="calorie-info">
            <img className='small-icn' src={CalorieIcn}alt="" />
            <h3 className='exname'>{calorieCnt}</h3>
        </div>

        <h3 className='time '>{time}</h3>

        <Link to={path} userEmail={userEmail}><img className='small-icn-two' src={playIcn} alt="" /></Link>
    </div>
  )
}

export default SuggestedExercise