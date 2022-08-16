import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

//route protection mate
const Protect = (props) => {

    // console.log("poppop=>",props)
    // const navigate = useNavigate()
    const { Component } = props
    const { permission } = props

    let token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to="/" />
    }


    if (props.rolepermission.length > 0) {  
        if (token && props.rolepermission.includes(permission)) {
            return <Component />

        } else {
            return <Navigate to="/" />
        }
    }
}
export default Protect;

