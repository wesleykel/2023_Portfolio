
import {useGlobalContext} from "/Users/wesley/Desktop/Projects/LegoPortfolio/Portfolio/hooks/DMContext";
import { useLocation } from "react-router-dom";


const breadCrumb = () => {

  const {darkMode} =useGlobalContext()

console.log(darkMode)

  let location = useLocation()

  if(location.pathname.length >1){



    return (<p className={`bc-${darkMode}`}>{location.pathname}</p>)

  }

  
return

}



  export default breadCrumb