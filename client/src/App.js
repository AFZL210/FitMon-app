import {React,useState} from 'react'
import './App.css';
import LandingPage from './components/LandingScreen/LandingPage';
import Login from './components/userAuthentication/Login';
import SignUp from './components/userAuthentication/SignUp';
import Home from './components/Contents/Home'
import {Route, Routes} from 'react-router-dom'
import { UserData } from "./Data";

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Time",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (

    <div className="app-container">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home/*' element={<Home chartData={userData}/>} />
      </Routes>
    </div>

  );
}

export default App;
