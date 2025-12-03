import React, { useState } from 'react'
import ice from '../assets/ice.jpg'
import water from '../assets/water.jpg'
import watervapour from '../assets/watervapour.jpg'
'

const StatesOfMatter = () => {
    
    const [temperature,setTemperature]=useState(24);
    const [state,setstate] =useState("");

    const Increment =()=>{
        setTemperature(temperature+10);
    }
    const Decrement =()=>{
        setTemperature(temperature-10);
    }
    const Reset =()=>{
        setTemperature(24);
    }
  return (
    <>
    <div>Temperature:{temperature}</div>
    <button onClick={Increment}>cool</button>
    <button onClick={Decrement}>heat</button>
    <button onClick={Reset}>reset</button>
    </>
  )
}

export default StatesOfMatter