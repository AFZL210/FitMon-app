import {React,useState,useEffect} from 'react'
import '../../css/Dashboard.css'
import CategoryCard from '../../Cards/CategoryCard'
import yogaCatIcn from '../../media/category/yoga-pose.png'
import advYogaIcn from '../../media/category/advYoga.png'
import absIcn from '../../media/category/absIcn.png'
import fullBodyIcn from '../../media/category/fullBody.png'
import weightLossIcn from '../../media/category/weightLossIcn.png'
import profileIcn from '../../media/profile_avatar.png'
import clockIcn from '../../media/clock.png'
import calorieIcn from '../../media/calories.png'
import MiniStatCard from '../../Cards/MiniStatCard'
import LineChart from '../Charts/LineChart'
import plankIcn from '../../media/icons/Pose1Plank.png'
import SuggestedExercise from '../../Cards/SuggestedExercise'
import sideAvatarIcn from '../../media/side_avatar.png'
import squatIcn from '../../media/squatIcn.png'




const Dashboard = ({chartData}) => {
  
  let userEmail = localStorage.getItem("userEmail")
  let baseStr = `http://localhost:5000/api/userdata/${userEmail}`

  let userData = JSON.parse(localStorage.getItem('userInfo'))
  console.log(userData.name)

  return (
 

      
    <div className="dashboard-container">
     <div className="row-left">
        <CategoryCard imgSrc={yogaCatIcn} catInfo="25 Days, 20 Minutes/Day" categoryName="Beginner Yoga" path="/home/train-yoga/begginer-yoga"/>
        <CategoryCard imgSrc={advYogaIcn} catInfo="8 Poses, 30 Minutes" categoryName="Advance Yoga" path="/"/>
        <CategoryCard imgSrc={absIcn} catInfo="5 Poses, 10 reps 30 Minutes" categoryName="Abs Exercise" path="/"/>
        <CategoryCard imgSrc={fullBodyIcn} catInfo="10 Poses, 12 reps 40 Minutes" categoryName="Full Body Exercise" path="/"/>
        <CategoryCard imgSrc={weightLossIcn} catInfo="35 Minutes Fast Fat loss" categoryName="Weight Loss Exercise" path="/"/>


        <div className="suggested-exercises">
          <h3 className='sugg-text'>Suggested Exercises</h3>
          <SuggestedExercise name="Squat" time="60s" exerciseIcn={squatIcn} path='/home/train-yoga/squat-pose' userEmail={userEmail} calorieCnt="0.32"/>
            <SuggestedExercise name="Plank" time="60s" exerciseIcn={plankIcn} path='/home/train-yoga/plank-pose' userEmail={userEmail} calorieCnt="1.38"/>

        </div>

        <div style={{ width: 700 }}>
        <LineChart chartData={chartData} />
      </div>
     </div>

     <div className="row-right">
        <div className="mini-stats-container">
          <div className="user-profile">
            <img className='profile-icn' src={profileIcn} alt="" />
            <h3>{userData.name}</h3>
          </div>
          <div className="stat-item-container">
            <h2 className='st-text'>STATS</h2>
           
            <MiniStatCard newId="" text={userData.calories} imgSrc={calorieIcn}/>
            <MiniStatCard newId="smallIcn" text={userData.timeToday} imgSrc={clockIcn}/>
          </div>

          <div className="buy-premium-banner">
            <div className="text-cnt">
              <h1>Subscribe</h1>
              <h3 className='prem-sub'>To our premium plan</h3>
            </div>

            <img className='prem-icn' style={{width:"16rem"}} src={sideAvatarIcn} alt="" />

            <div className="prem-features">
              <h3>NO ADS</h3>
              <h3>ALL EXERCISES</h3>
              <h3>PERNOAL DIET</h3>
            </div>

            <div className="prem-btn-cnt">
              <button className='sub-btn'>Subscribe</button>
            </div>
          </div>
        </div>

        

   
     </div>
    </div>



  )
}

export default Dashboard