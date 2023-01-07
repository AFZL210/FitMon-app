import {React,useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import home from '../../media/home.png'
import yoga from '../../media/yoga-pose.png'
import gym from '../../media/woman.png'
import coin from '../../media/coin.png'
import stats from '../../media/stats.png'
import community from '../../media/community.png'

import '../../css/Sidebar.css'

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="side-items">
        <CustomLink to='/home' src={home} />
        <CustomLink to='/home/train-yoga' src={yoga} />
        <CustomLink to='/home/train-strength' src={gym} />
        <CustomLink to='/home/user-stats' src={stats} />
        <CustomLink to='/home/fit-coins' src={coin} />
        <CustomLink to='/home/fitmon-club' src={community}/>
      </div>
    </div>
  )
}

export default Sidebar





function CustomLink({to,src, ...props}) {
  const path = window.location.pathname;

  return (
    <div className={path == to ? "side-item active":"side-item"}>
      <Link to={to} {...props}><img className='side-icon' src={src} alt="" /></Link>
    </div>
  )
}