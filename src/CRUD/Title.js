import React from 'react'
import './Title.css'
import { useNavigate } from 'react-router-dom';


const Title = () => {
   const navigate = useNavigate();
  return (

        <>
        <div className='title_body'>
            <div className='btn'>
                <button onClick={()=>{navigate("./form")}} >ADD</button>
            </div>
            <div className='title'>
                <h1> React CRUD </h1>
            </div>
        </div>
        </>

    
  )
}

export default Title;