import React, { useEffect, useState } from 'react'

const useDarkMode = () => {



let [mode ,setMode] =useState<String|null>()

useEffect(()=>{


    let data = localStorage.getItem("screen")
  
    if(!data){
  localStorage.setItem("screen","light")
  setMode("light")
    }else{
  
  setMode(`${localStorage.getItem("screen")}`)
  
    }
  
  
  
  },[])
  

  return [mode] 
}

export default useDarkMode