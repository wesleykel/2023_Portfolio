import React, { useEffect, useState } from "react";
import style from "./heading.module.css";
import "./heading.css";
import burger from "../../src/assets/bar.png";
import whiteBurger from "../../src/assets/icons8-menu-rounded-100.png";
import lightBulb from "../../src/assets/contrast.png"
import night from "../../src/assets/night.png"
import { useGlobalContext } from "../../hooks/DMContext";
import {Link} from "react-router-dom"

const Heading = () => {
  const [mode, setMode] = useState("hide");
  const [menu, setmenu] = useState("hideMenu");
  const [hideButton, setButton] = useState("showButton");
  //const [screenSize , setScreenSize] = useState(0)
  const { darkMode, setDarkMode } = useGlobalContext();
  const [buttonText, setButtonText] = useState("");

  function hideMenu() {
    if (mode === "hide") {
      setButton("hideButton");
      setMode("show");
      setmenu("showMenu")
    } else {
      setButton("showButton");
      setMode("hide");
      setmenu("hideMenu")
    }
  }
  function hideMenuNavBar() {
    if (mode === "show") {
     console.log("hkjkjk")
      setButton("showButton");
      setMode("hide");
    }
  }

  function userScreen() {
    let data = localStorage.getItem("screen");

    //console.log(data);

    if (data === "dark") {
      localStorage.setItem("screen", "light");
      setDarkMode("light");
      setButtonText("Dark mode");
    }

    if (data != "dark") {
      localStorage.setItem("screen", "dark");
      setDarkMode("dark");
      setButtonText("Light mode");
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("screen");

    if (!data) {
      localStorage.setItem("screen", "light");
      setDarkMode("light");
      setButtonText("Dark mode");
    } else {
      setDarkMode(`${localStorage.getItem("screen")}`);

      if (localStorage.getItem("screen") === "light") {
        setButtonText("Dark mode");
      } else {
        setButtonText("Light mode");
      }
    }
  }, []);

  /*useEffect(()=>{

//listening for screen size to change
window.addEventListener("resize",()=>setScreenSize(window.innerWidth))


setMode("show") ,setButton("showButton");

window.removeEventListener("resize",()=>setScreenSize(1))
},[screenSize > 1501 && mode === "show"])


*/

  return (
    <div className={darkMode} onMouseLeave={hideMenuNavBar}  >
      <div className={style.wrapper}  >
        <ul>
          <div className={style.logo}>www.wesleykelly.dev</div>
        </ul>

        <ul className={style.links}>
          <li className={style.li}>About</li>
          <li className={style.li}> Projects</li>
          <li className={style.li}>Contact</li>
        </ul>
    
        <ul className={style.buttonLinks}>
          {darkMode === "light" ? (
            <img
            
              onClick={hideMenu}
              className={`${hideButton}`}
              src={burger}
            ></img>
          ) : (
            <img
 
              className={`${hideButton}`}
              onClick={hideMenu}
              src={whiteBurger}
            ></img>
          )}
       
        </ul>
       
      </div>
      <ul className={"menu " + mode} >
       <li  ><Link className={"links "+ menu} to="/">Home</Link></li>
         <li ><Link className={"links "+ menu}  to="/about">About</Link></li>
          <li ><Link className={"links "+ menu}  to="/projects">Projects</Link></li>
          <li ><Link className={"links "+ menu}  to="/contact">Contact</Link></li>
          <li ><Link className={"links "+ menu}  to="/blog">Blog</Link></li>
          <li >
       <div className={"links " +menu }>
           {darkMode === "dark" ?<img  className="darkModeIcon" onClick={userScreen} src={lightBulb}></img>:<img  className="darkModeIcon" onClick={userScreen} src={night}></img>}
          </div>
          
          </li>
         
         {/* <li className="links">
            <div
              onClick={() => {
                setMode("hide"), setButton("showButton");
              }}
            >
              close
            </div>
          </li>*/}
        </ul>
    </div>
  );
};

export default Heading;
