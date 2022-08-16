import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

//route without protection mate
const Public = (props) => {
    const { children } = props

    let token = localStorage.getItem("token")

    if (token) {
        return <Navigate to="/student" />
    } else {
        return children
    }
}
export default Public;

