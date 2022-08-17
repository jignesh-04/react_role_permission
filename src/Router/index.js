import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes1 from './router'

const Appindex = () => {
  return (
    <BrowserRouter>
        <Routes>
            {routes1.map((Ele,inx)=>{
                return(
                    <Route key={inx} exact path={Ele.path} element={ < Ele.component /> } />
                )
               }) 
            }
        </Routes>
    </BrowserRouter>
  )
}

export default Appindex;