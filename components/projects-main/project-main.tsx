import React, { useEffect, useState } from 'react'
import "./project-main.css"

import {useGlobalContext} from "../../hooks/DMContext"
const projectMain = () => {
const {darkMode} =useGlobalContext()
    return (
        <div className={`main-${darkMode}`}>
      
        <h1>Projects</h1>
        </div>
    )
}

export default projectMain