import {React, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'; 
import avIcn from '../../media/avatarICN.png'


const SignUp = () => {

    let navigate = useNavigate()

   const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)
    const [reffralCode,setRefferalCode] = useState("")
    const [gender,setGender] = useState("")
    const [mobileNumber,setMobileNumber] = useState(0)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)

    const submitHandler = async (e) => {
      e.preventDefault()
    try{

      const config = {
        headers: {
            "Content-type":"application/json"
        }
    };

    const {data} = await axios.post("http://localhost:5000/api/user/register",{
      name,email,password,age,height,weight
    },config)

    console.log(data)
    navigate('/')

    }catch(error) {
      setError(error.response.data.message)
      console.log(error.response.data.message)
    }

    }

  return (
    
    <div class="container">
    <div class="right-row">
                  <img class="avatar-right" src={avIcn} alt=""></img>
              </div> 
      <div class="left-row">
          <div class="head-container">
              <h2><u class="login-head">Sign</u>Up</h2>
          </div>

          <div class="form-conainer">

              <form onSubmit={submitHandler}>
              <div class="input-container">
                  <input type="string" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" name="Name" id=""></input>
              </div>
              <div class="input-container">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" name="username" id=""></input>
              </div>
              <div class="input-container">
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" name="password" id=""></input>
              </div>
              <div class="input-container">
                  <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter Age" name="age" id=""></input>
              </div>
              <div class="input-container">
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Enter Weight" name="weight" id=""></input>
              </div>

              <div class="input-container">
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Enter Height" name="weight" id=""></input>
              </div>
              
              <div class="btn-container">
                  <button type="submit">Sign Up</button>
              </div>

              
              </form>
              </div>
                
      </div>
  </div>

  )
}

export default SignUp