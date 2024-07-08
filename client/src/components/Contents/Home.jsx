import {React} from 'react'
import Header from '../Sidebar_Header/Header'
import {Routes,Route} from 'react-router-dom'
import '../../css/home.css'
import Sidebar from '../Sidebar_Header/Sidebar'
import profile_avatar from '../../media/profile_avatar.png'
import Dashboard from './Dashboard'
import CoinsSection from './CoinsSection'
import YogaSection from './YogaSection'
import CommunitySection from './CommunitySection'
import StrengthSection from './StrengthSection'
import UserStats from './UserStats'


const Home = ({chartData}) => {


 

  
  return (
    <div className='home-container'>
        <Header/>


    <div className="content-container">
          <Routes>
            <Route path='/*' element={<Dashboard   chartData={chartData}/>}/>
            <Route path='train-yoga/*' element={<YogaSection/>}/>
            <Route path='train-strength/*' element={<StrengthSection/>}/>
            <Route path='user-stats' element={<UserStats/>}/>
            <Route path='fit-coins' element={<CoinsSection/>}/>
            <Route path='fitmon-club' element={<CommunitySection/>}/>

          </Routes>
        </div>


       
        <div className="sidebar-container">
            <Sidebar/>
        </div>

        <div className="profile-container">
          <img className='profile_avatar' src={profile_avatar} alt="" />
        </div>
       
    </div>
  )
}

export default Home