import React from 'react'
import '../../css/SelectYogaCat.css'
import SelectYogaCard from '../../Cards/SelectYogaCard'
import plankIcn from '../../media/category/plank.jpeg'
import chairIcn from '../../media/category/chair.jpeg'
import treeIcn from '../../media/category/tree.jpeg'
import balancingStick from '../../media/category/balacing.jpeg'


const SelectYogaCat = () => {
  return (
 
        
    <div className="select-container">
       <div className="select-container">
      <h1 className='yg-play'>Yoga Playground</h1>

      <div className="yoga-pose-container">
          <SelectYogaCard path='/home/train-yoga/plank-pose' yogaName="Plank" intensity="yg-one" imgSrc={plankIcn}/>

          <SelectYogaCard path='/home/train-yoga/squat-pose' yogaName="Squat Pose" intensity="yg-two" imgSrc={chairIcn}/>

          <SelectYogaCard path='/home/train-yoga/tree-pose' yogaName="Tree Pose" intensity="yg-one" imgSrc={treeIcn}/>

          <SelectYogaCard path='/home/train-yoga/balancing-stick-pose' yogaName="Balancing Stick" intensity="yg-three" imgSrc={balancingStick}/>
      </div>
       </div>
    </div>


  )
}

export default SelectYogaCat