import React, { useEffect, useState } from 'react'
import "./contactMain.css"
//import useDarkMode from "../../hooks/useDarkMode"
import {useGlobalContext} from "../../hooks/DMContext"
const contactMain= () => {
const {darkMode} =useGlobalContext()
    return (
        <div className={`main-${darkMode}`}>
          
           <h1 >contact</h1>
        </div>
    )
}

export default contactMain