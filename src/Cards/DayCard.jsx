import React from 'react'
import '../css/DayCard.css'
import glassIcn from '../media/Card/glassTime.png'
import plankIcn from '../media/category/plank.jpeg'
import SelectYogaCard from './SelectYogaCard'
import treeIcn from '../media/category/tree.jpeg'
import chairIcn from '../media/category/chair.jpeg'
import {Link} from 'react-router-dom'


const DayCard = ({day,time}) => {
  return (
    <div className="day-container">
        <div className="top-info">
            <h2>{day}</h2>
            <div className="time-info-cont">
                <img className='time-icn' src={glassIcn} alt="" />
                <h2>{time}</h2>
            </div>
        </div>

        <div className="middle-info">
           <SelectYogaCard imgSrc={plankIcn}/>
           <SelectYogaCard imgSrc={treeIcn}/>
           <SelectYogaCard imgSrc={chairIcn}/>
        </div>

        <div className="bottom-info">
            <Link to='/home/train-yoga/begginer-yoga/training' className='start-day'>START</Link>
        </div>
    </div>
  )
}

export default DayCard