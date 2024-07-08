import React from 'react'
import "../css/YogaCardSel.css"
import {Link} from 'react-router-dom'


const SelectYogaCard = ({imgSrc,yogaName,intensity,path}) => {
  return (

<Link to={path} className='link'>
<div className="sel-yoga-cont">
        <div className="img-cont-yg">
            <img className='yg-img' src={imgSrc} alt="" />
        </div>

        <div className="yg-text">
            <h3>{yogaName}</h3>
        </div>

        <div className="intensity-yg">
            <h3>Intensity</h3>
            <div id={intensity} className="yg-in"></div>
        </div>

        <div className="intensity-yg">
            <h3>Time</h3>
            <h3>60s</h3>
        </div>
    </div>
</Link>

  
  )
}

export default SelectYogaCard