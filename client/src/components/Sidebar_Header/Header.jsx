import React from 'react'
import '../../css/Header.css'
import icon from '../../media/icon.png'

const Header = () => {

  let d = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <div className='navbar'>
        <img className='icon' src={icon} alt="FitMon_icon" />

        <div className="text-container">
          <h3 className='greet-title'>Namste! {d.name}</h3>
          <h4 className='summ'>Here is your fitness summary!</h4>
        </div>

    </div>
  )
}

export default Header