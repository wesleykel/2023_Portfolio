import React, { useEffect, useState } from 'react'
import "./main.css"
//import useDarkMode from "../../hooks/useDarkMode"
import {useGlobalContext} from "../../hooks/DMContext"
const main = () => {
const {darkMode} =useGlobalContext()
    return (
        <div className={`main-${darkMode}`}>
         
        </div>
    )
}

export default main