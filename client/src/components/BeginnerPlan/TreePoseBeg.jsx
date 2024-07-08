import React,{useEffect} from 'react'
import { createRef } from 'react'
import { Holistic } from '@mediapipe/holistic/holistic'
import {
  drawConnectors,
  drawLandmarks,
  lerp,
} from '@mediapipe/drawing_utils/drawing_utils'
import { POSE_CONNECTIONS, POSE_LANDMARKS } from '@mediapipe/pose/pose'
import '../../css/ExerciseStyle.css'
import plankGIF from '../../media/plankGIF.gif'
import calorieIcn from '../../media/calories.png'
import clockIcn from '../../media/clock.png'
import coinIcn from '../../media/coin (1).png'
import {useSpeechSynthesis} from 'react-speech-kit';

import { Camera } from '@mediapipe/camera_utils/camera_utils'


function add() {
  checkpt = Math.round( (checkpt+0.08) * 100) / 100
}

function speak(){
  const h2 = document.querySelector('h2');
      const text = h2.textContent;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
}

function addCal() {
  let val = 2.5
 const calories = parseInt(localStorage.getItem('calories'))
 localStorage.removeItem('calories')
 localStorage.setItem("calories",calories+val)
}

function addTime() {
  let val = 60
 const time = parseInt(localStorage.getItem('time'))
 localStorage.removeItem('time')
 localStorage.setItem("time",time+val)
}


let checkpt = 0

let leftArmData;
    let leftShoulderRaw;
    let leftElbowRaw;
    let leftWristRaw;
    let leftwaist;
    let leftwaistData;
    let leftknee;
    let leftkneeData;

    let rightArmData;
    let rightShoulderRaw;
    let rightElbowRaw;
    let rightWristRaw;
    let rightwaist;
    let rightwaistData;
    let rightknee;
    let rightkneeData;


// THIS ONE IS FOR TTS 

function TreePoseBeg() {
  
    useEffect(() => {
      
    }, []);
    
  
  
  const canvasElementRef = createRef()
  const videoElementRef = createRef()
  const detectionConfidence = 0.7;
  const trackingConfidence = 0.3;

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
      },
    })
    holistic.setOptions({
      upperBodyOnly: true,
      smoothLandmarks: false,
      minDetectionConfidence: detectionConfidence,
      minTrackingConfidence: trackingConfidence,
    })

    const camera = new Camera(videoElementRef.current, {
      onFrame: async () => {
        await holistic.send({ image: videoElementRef.current })
      },
      width: 640,
      height: 420,
    })
    holistic.onResults(onResults)
    camera.start()
  }, [])

  function removeElements(landmarks, elements) {
    for (const element of elements) {
      delete landmarks[element]
    }
  }

  function onResults(results) {
    const canvasCtx = canvasElementRef.current.getContext('2d')
    const canvasElement = canvasElementRef.current

    removeLandmarks(results)

    canvasCtx.save()
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    )

   
    canvasCtx.lineWidth = 1
    if (results.poseLandmarks) {
      if (results.rightHandLandmarks) {
        canvasCtx.strokeStyle = '#00FF00'
        connect(canvasCtx, [
          [
            results.poseLandmarks[POSE_LANDMARKS.RIGHT_ELBOW],
            results.rightHandLandmarks[0],
          ],
        ])
      }
      if (results.leftHandLandmarks) {
        canvasCtx.strokeStyle = '#FF0000'
        connect(canvasCtx, [
          [
            results.poseLandmarks[POSE_LANDMARKS.LEFT_ELBOW],
            results.leftHandLandmarks[0],
          ],
        ])
      }
    }

    // console.log(results.poseLandmarks[12].x)
    function getAngleInRadians(A,B,C) {
      let BA = {
        x: A.x - B.x,
        y: A.y - B.y
      }

      let BC = {
        x: C.x - B.x,
        y: C.y - B.y
      }

      let UV = (BA.x * BC.x) + (BA.y * BC.y);
      let UVmod = Math.sqrt( Math.pow(BA.x, 2) + Math.pow(BA.y, 2)) +  Math.sqrt( Math.pow(BC.x, 2) + Math.pow(BC.y, 2))
      return Math.acos(UV/UVmod);
    }

function find_angle(A,B,C) {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));    
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2)); 
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    return Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
}
function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
    // const landmarkContainer = document.getElementsByClassName('landmark-grid-container')[0];
    // const grid = new LandmarkGrid(landmarkContainer);
    
    function onResults(results) {
      if (!results.poseLandmarks) {
        // grid.updateLandmarks([]);
        return;
      }
    
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.segmentationMask, 0, 0,
                          canvasElement.width, canvasElement.height);
    
      // Only overwrite existing pixels.
      canvasCtx.globalCompositeOperation = 'source-in';
       canvasCtx.fillStyle = "rgba(0, 0, 0, 0.1)"; // very low opacity
   
      canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
    
      // Only overwrite missing pixels.
      canvasCtx.globalCompositeOperation = 'destination-atop';
      canvasCtx.drawImage(
          results.image, 0, 0, canvasElement.width, canvasElement.height);
    
      canvasCtx.globalCompositeOperation = 'source-over';







      // all landmaks
    //  console.log(results.poseLandmarks)
      
    const canvasCtx = canvasElement.getContext('2d');
    }


      leftShoulderRaw = results.poseLandmarks[11];
     leftElbowRaw = results.poseLandmarks[13];
     leftWristRaw = results.poseLandmarks[15];
     leftknee=results.poseLandmarks[25];
     leftwaist=results.poseLandmarks[23];
     
     rightShoulderRaw=results.poseLandmarks[12];
     rightElbowRaw=results.poseLandmarks[14];
     rightWristRaw=results.poseLandmarks[16];
     rightknee=results.poseLandmarks[26];
     rightwaist=results.poseLandmarks[24];




     leftArmData = [
      {
        x:leftShoulderRaw.x,
        y:leftShoulderRaw.y
      },
      {
        x:leftElbowRaw.x,
        y:leftElbowRaw.y
      },
      {
        x:leftWristRaw.x,
        y:leftWristRaw.y
      }
     ]

     rightArmData = [
      {
        x:rightShoulderRaw.x,
        y:rightShoulderRaw.y
      },
      {
        x:rightElbowRaw.x,
        y:rightElbowRaw.y
      },
      {
        x:rightWristRaw.x,
        y:rightWristRaw.y
      }
     ]

     // console.log(leftArmData)
     let angleleft = find_angle(leftArmData[0],leftArmData[1],leftArmData[2]);
     let angleright=find_angle(rightArmData[0],rightArmData[1],rightArmData[2]);
      angleleft=radians_to_degrees(angleleft);
      angleright=radians_to_degrees(angleright);
     
    //  console.log(angleleft);


    leftwaistData = [
      {
        x:leftwaist.x,
        y:leftwaist.y
      },
      {
        x:leftShoulderRaw.x,
        y:leftShoulderRaw.y
      },
      {
        x:leftElbowRaw.x,
        y:leftElbowRaw.y
      },
     ]

     rightwaistData = [
    {
        x:rightwaist.x,
        y:rightwaist.y
    },
    {
      x:rightShoulderRaw.x,
      y:rightShoulderRaw.y
    },
    {
        x:rightElbowRaw.x,
        y:rightElbowRaw.y
      },
     ]

     let angleleft_c = find_angle(leftwaistData[0],leftwaistData[1],leftwaistData[2]);
     let angleright_c=find_angle(rightwaistData[0],rightwaistData[1],rightwaistData[2]);
      angleleft_c=radians_to_degrees(angleleft_c);
      angleright_c=radians_to_degrees(angleright_c);
      console.log(angleleft_c);

      


    leftkneeData = [
      {
        x:leftknee.x,
        y:leftknee.y
      },
      {
        x:leftShoulderRaw.x,
        y:leftShoulderRaw.y
      },
      {
        x:leftwaist.x,
        y:leftwaist.y
      },
     ]

     rightkneeData = [
    {
        x:rightknee.x,
        y:rightknee.y
    },
    {
      x:rightShoulderRaw.x,
      y:rightShoulderRaw.y
    },
    {
        x:rightwaist.x,
        y:rightwaist.y
      },
     ]

     let angleleft_a = find_angle(leftkneeData[0],leftkneeData[1],leftkneeData[2]);
     let angleright_a=find_angle(rightkneeData [0],rightkneeData [1],rightkneeData [2]);
      angleleft_a=radians_to_degrees(angleleft_a);
      angleright_a=radians_to_degrees(angleright_a);
      angleleft_a=180-angleleft_a;
      console.log(angleleft_a);
      angleright_a=180-angleright_a;


     

      //THIS IS FOR KNEE ANGLE 


    //   if(angleleft_a>=155|| angleright_a>=155){
    //     document.getElementById("message").innerHTML="GOOD KNEE POSE ";
    //   }
    //   else{
    //     document.getElementById("message").innerHTML="TODA UPAR NICHE HOKE DEKH ";
    //   }

        console.log (angleleft_a);
      
      if(((angleleft<=98 && angleleft>=72) && (angleleft_c>=70 && angleleft_c<=100 ) && angleleft_a>=155) 
            || ((angleright<=95 && angleright>=75) && angleright_a>=155 && (angleright_c>=70 && angleright_c<=100))
      ){
        document.getElementById("message").innerHTML="ALL SET ";
        
        speak();
        
      }

      if(checkpt == 10) {
        alert("YA!")
      }
      else {
        // if(angleleft>98 || angleright>98){
        //     document.getElementById("message").innerHTML="Wacth your Elbow ";
        // }
        // else if (angleleft<72 || angleright<72 ){
        //     document.getElementById("message").innerHTML="Watch your Elbow ";
        // }
        // else if (angleleft_c<70 || angleright_c<70){
        //     document.getElementById("message").innerHTML="Adjust your Shoulder";
        // }
        // else if (angleleft_c || angleright_c){
        //     document.getElementById("message").innerHTML="Adjust your Shoulder";
        // }
         if (angleleft_a<154){
            console.log("LOWER HIP ACTIVATED");
            document.getElementById("message").innerHTML="Lower Your Hip";
            speak();
            
            
            
        }
        else{
          console.log("LOWER HIP ACTIVATED");
          
          document.getElementById("message").innerHTML="Raise Your Hip";
          setTimeout(add,1000)
          document.getElementById("checkpt").innerHTML=`${checkpt}`;
         speak();
            
            
        }
      }
    
      
     




 
  
  
    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 0.6
    })
    drawLandmarks(canvasCtx, results.poseLandmarks, {
      color: '#00FF00',
      fillColor: '#8fa9ff',
      lineWidth: 0.6
    })

    canvasCtx.restore()
  }







  // removing unwanted landmarks
  function removeLandmarks(results) {
    if (results.poseLandmarks) {
      removeElements(results.poseLandmarks, [
        0,1,2,3,4,5,6,7,8,9,10,29,30,31,32,22,18,20,21,19,17
      ])
    }
  }

  

  function connect(ctx, connectors) {
    const canvas = ctx.canvas
    for (const connector of connectors) {
      const from = connector[0]
      const to = connector[1]
      if (from && to) {
        if (
          from.visibility &&
          to.visibility &&
          (from.visibility < 0.1 || to.visibility < 0.1)
        ) {
          continue
        }
        ctx.beginPath()
        ctx.moveTo(from.x * canvas.width, from.y * canvas.height)
        ctx.lineTo(to.x * canvas.width, to.y * canvas.height)
        ctx.stroke()
      }
    }
   
  }


  

  return (
    <div className="ex-container">
      <h1>Plank Pose</h1>
      <div className="top-ex-container">
      <video
          style={{
            position: 'relative',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display:"none"
          }}
          ref={videoElementRef}
        ></video>
        <canvas
          ref={canvasElementRef}
          style={{
            width: '640px',
            height: '55vh',
          }}
        ></canvas>

        <div className="ex-tut-container">
        <div className="correct-text">
          <h2 id="message" >Raise Your Hip</h2>
        </div>

        <div className="gif-container">
          <img className='gif' src={plankGIF} alt="" />
        </div>
        </div>
      </div>
      <div className="bottom-ex-container">
          <div className="start-pause-cont">
            <button className='start-ex-btn'>START</button>
          </div>

          <div className="timer-container">
            <div className="current-time">
              <img className='clock-icn' src={clockIcn} alt="" />
              <h2 id="checkpt">0</h2>
            </div>
            <h2>Total Time : 10</h2>
          </div>

          <div className="exe-info">
            <div className="info">
              <div className="info-img-cont">
                <img className='ex-info-icn' src={calorieIcn} alt="" />
                <div className="info-txt">
                  <h3>765</h3>
                </div>
              </div>

              <div className="info-img-cont">
                <img className='ex-info-icn' id='coin' src={coinIcn} alt="" />
                <div className="info-txt">
                  <h3>10</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TreePoseBeg
