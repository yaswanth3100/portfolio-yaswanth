import React, { useState,useEffect } from 'react'
// import lhome from '../src/LunchBox/ln-home.PNG'
// import lone from '../src/LunchBox/ln-1.PNG'
// import ltw from '../src/LunchBox/ln-2.PNG'
// import lth from '../src/LunchBox/ln-3.PNG'
// import lfo from '../src/LunchBox/ln-4.PNG'
// import lfi from '../src/LunchBox/ln-5.PNG'
// import ls from '../src/LunchBox/ln-6.PNG'
const Carosol = ({pics}) => {
 const[index,setIndex]=useState(0);/* eslint no-unused-vars : "off" */
 const[img,setImg]=useState(pics);
 /* eslint no-unused-vars : "off" */

 const setIndexVal=()=>{
  if(index<img.length-1)
  {
   setIndex(index+1);
  }
  else{
   setIndex(0);
  }
 }


 useEffect(() => {
   const timer = setTimeout(()=>{
   setIndexVal();
  },3000)
  return ()=>clearTimeout(timer);
 }, [index])// eslint-disable-line react-hooks/exhaustive-deps
 

  return (
    <div className="img-hold" >
      <img className="projectpics" src={img[index]} alt="" />
    </div>
  )
} 

export default Carosol
