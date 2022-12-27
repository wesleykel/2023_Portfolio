import React, { useEffect, useState } from 'react'
import "./about-main.css"
//import useDarkMode from "../../hooks/useDarkMode"
import {useGlobalContext} from "../../hooks/DMContext"
const aboutMain = () => {
const {darkMode} =useGlobalContext()
    return (
        <div className={`main-${darkMode}`}>
          

        <h1>About</h1>
        </div>
    )
}

export default aboutMain