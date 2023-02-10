import React from "react";
import Heading from "../components/heading/heading";
import Main from "../components/about-main/about-main";
import {useGlobalContext} from "../hooks/DMContext";
import { useLocation } from "react-router-dom"
import BreadCrumb from "../components/breadCrumb/breadCrumb"
const About = () => {

  const {darkMode} =useGlobalContext()


  return (
    <>
    <Heading />
    <BreadCrumb/>
   <div  className={`main-${darkMode}`} >
      
    <div  style={{ zIndex:"2",fontSize:"9vw",textAlign:"center", paddingTop:"20vh"}}>Wesley Kelly</div> 
 
  

<main className='aboutWrapper'>
 <p>School of Code graduate (March 2022), I decided to start teaching myself to code  in 2020 during the first Covid19 lockdown, while also working full time at my previous job. </p>
 <p>
 Once I started to learn, I slowly realised that "learning to code" was not something I could do in 3 months while working full time and so my journey began.
 </p>
 <p>After 15 years and 5 roles working as an administrator at a FE College, I made the decision to change to a career in tech.</p>
 <p>I found the School of Code by chance while browsing Twitter, it looked too good to be true, what was the catch? </p>

 <p>After 16 weeks of the intensive course I'm yet to find one, the course taught me many many things that I don't think it would be possible to learn on my own, including how to think computationally  when breaking  down problems, how to work in an agile way within engineering teams and how to learn.</p>

 <p>I'm now searching for my first role in Tech, If you're interested in hearing more about me or my journey, please have a look at some of my previous projects and contact me below.</p>
 </main>
  
    </div>
    </>
    
  );
};

export default About;
