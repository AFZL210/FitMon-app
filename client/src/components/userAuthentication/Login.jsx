import {React, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'; 
import avIcn from '../../media/avatarICN.png'
import '../../css/Auth.css'


const Login = ({history}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const [login,setLogin] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo) {
            navigate("/home")
        }
    },[login])

    const submitHandler = async (e) => {

        e.preventDefault();

        try{
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }

            setLoading(true)


            const {data} = await axios.post('http://localhost:5000/api/user/login',{
                email,password
            },config)

            console.log(data.email)

            localStorage.setItem('userEmail',data.email)
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false)
        }catch(error){
            setError(error.response.data.message)
            console.log(error.response.data.message)
        }
    }

  return (
    <div class="container">
    <div class="left-row">
        <div class="head-container">
            <h2><u class="login-head">Lo</u>gin</h2>
        </div>

        <div class="form-conainer">

            <form onSubmit={submitHandler}>
            <div class="input-container">
                <input type="email" placeholder="Enter Email"value={email} onChange={e => setEmail(e.target.value)} name="email" id=""></input>
            </div>
            <div class="input-container">
                <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} name="password" id=""></input>
            </div>
                <div class="reset-container">
                  <a class="create-account" href="#">Create Account</a>
                  <a class="forgot-password" href="#">Forgot Password?</a>
                </div>
            
            <div class="btn-container">
                <button type="submit">Login</button>
            </div>

            
            </form>
            </div>
    </div>
            <div class="right-row">
                <img class="avatar-right" src={avIcn} alt=""></img>
            </div>   
</div>
  )
}

export default Login