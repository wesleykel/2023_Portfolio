import React from "react";
import Heading from "../components/heading/heading";
import {useGlobalContext} from "../hooks/DMContext";
import wesFlip from "../src/assets/wesFlip.png"
import BreadCrumb from "../components/breadCrumb/breadCrumb"

const Home = () => {

  const {darkMode} =useGlobalContext()

  return (
  <div className="home">
  <Heading />
  <BreadCrumb/>
  
 <div className={`main-${darkMode}`}>
  
 <div  style={{ zIndex:"2",fontSize:"10vw",textAlign:"center", paddingTop:"20vh"}}>Wesley Kelly</div> 
  <div  style={{ fontSize:"4vw",padding:0,textAlign:"center"}}>Web Developer and Software Engineer</div> 


  </div>
  </div>
  )



};
export default Home;