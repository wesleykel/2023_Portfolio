
import {useGlobalContext} from "../../hooks/DMContext";
import { useLocation } from "react-router-dom";


const breadCrumb = () => {

  const {darkMode} =useGlobalContext()

console.log(darkMode)

  let location = useLocation()

  if(location.pathname.length >1){



    return <div className={`bc-${darkMode}`}>{location.pathname}</div>

  }

  
return null

}



  export default breadCrumb