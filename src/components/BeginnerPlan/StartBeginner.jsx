import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import PlankPoseBeg from './PlankPoseBeg'

const StartBeginner = () => {
  return (
    <Routes>
        <Route path='/' element={<PlankPoseBeg/>} />
    </Routes>
  )
}

export default StartBeginner