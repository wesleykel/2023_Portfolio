import React from "react";
import Heading from "../components/heading/heading";
import {useGlobalContext} from "../hooks/DMContext";
import wesFlip from "../src/assets/wesFlip.png"
const Home = () => {
  return (
    <>
      <Heading />
 <div style={ { color:"black", backgroundColor:"white" ,margin:0, padding:0 ,width:"100vw", height:"100%", border:"solid 1px light grey" , zIndex:-1, position:"absolute"}}>

  
  <div  style={{ zIndex:"2",fontSize:"10vw",textAlign:"center"}}>Wesley Kelly</div> 
  <div  style={{ fontSize:"5vw",padding:0,textAlign:"center"}}>Web Developer and Software Engineer</div> 


  </div>
    </>
  );
};

export default Home;
