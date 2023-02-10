import React, { useEffect, useState } from 'react'
import "./main.css"
//import useDarkMode from "../../hooks/useDarkMode"
import {useGlobalContext} from "../../hooks/DMContext"
const Main = () => {
const {darkMode} =useGlobalContext()

console.log(darkMode)
    return (
        <div className={`main-${darkMode}`}>
        
            < h1 >Wesley Kelly</h1>
            <h2>Software Engineer</h2>
         
        </div>
    )
}

export default Main