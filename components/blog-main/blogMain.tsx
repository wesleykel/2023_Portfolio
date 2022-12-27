
import "./blog-main.css"
//import useDarkMode from "../../hooks/useDarkMode"
import {useGlobalContext} from "../../hooks/DMContext"
const blogMain = () => {
const {darkMode} =useGlobalContext()
    return (
        <div className={`main-${darkMode}`}>
        

        <h1>Blog</h1>
        </div>
    )
}

export default blogMain