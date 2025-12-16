

import { useNavigate } from "react-router-dom";
import notfound from "../images/not.jpg"

import * as motion from "motion/react-client";
const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleClose = () => {
          // 👇 Go back to previous page
          navigate(-1);
      };
  return (
    <>
    
    <div className="notfound">
        
        <img src={notfound} alt="404"  className="notpage"/>
        <p className="textnot">Oops! The page you're looking for does not exist.</p>
        <button className="textnoth"  onClick={handleClose}> 
        <h1 className="textn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5m0 0l5 5"/></svg>Back to Home</h1>
        </button>
    </div>
      
    </>
  )
}

export default NotFoundPage
