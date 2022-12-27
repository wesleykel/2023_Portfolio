import "./App.css";
import Heading from "../components/heading/heading";
import Main from "../components/main/main";
import { MyGlobalContext } from "../hooks/DMContext";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Blog from "../pages/Blog"
function getData() {
  let screenData = localStorage.getItem("screen");

  const [darkmode, setDarkmode] = useState(screenData);

  return darkmode;
}

function App() {
  let darkModeData = getData();

  const [darkMode, setDarkMode] = useState<String | any>(darkModeData);

  return (
    <div className="App">
      <BrowserRouter>
<MyGlobalContext.Provider value={{ darkMode, setDarkMode }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      
      
      </MyGlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
