import React, { useState } from 'react'
import "./Project.css"

const Progress = ({done}) => {
const [bars,setBar]=useState({})

setTimeout(()=>{
   const newStyle ={
    width:`${done}%`,
   } 
   setBar(newStyle);
},1000);

  return (
    <div className='bar' style={bars}></div>
  )
}

export default Progress
