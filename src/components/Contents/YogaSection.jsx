import React from 'react'
import '../../css/YogaSectionContainer.css'
import SelectYogaCat from './SelectYogaCat'
import {Routes,Route} from 'react-router-dom'
import PlankPose from '../Exercises/YogaPoses/PlankPose'
import BegginerYoga from '../Exercises/BegginerYoga/BeginnerYoga'
import StartBeginner from '../BeginnerPlan/StartBeginner'
import SquatPose from '../Exercises/YogaPoses/SquatPose'

const YogaSection = () => {
  return (


<Routes>
      <Route path='/*' element={<SelectYogaCat/>}/>
      <Route path='/begginer-yoga' element={<BegginerYoga/>} />
      <Route path='/begginer-yoga/training' element={<StartBeginner/>} />
      <Route path='/plank-pose' element={<PlankPose/>} />
      <Route path='/squat-pose' element={<SquatPose/>} />
    </Routes>


  )
}

export default YogaSection