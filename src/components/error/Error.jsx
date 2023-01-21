import React from "react";
import "./errorstyle.css"
import { motion } from "framer-motion";
import errorimg from "./error404.png";
import {Link} from "react-router-dom";

function Error() {
  return(
    <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="error_div">
      <div style={{padding:"2vh"}}/>
      <div className="error_inner_div row">
        <div className="error_row_parta col-md-6 col-sm-12">
          <p className="error_linezero">Oops!!</p>
          <p className="error_lineone">Page not found</p>
          <p className="error_linetwo">The page you're looking for could have been deleted or have never existed</p>
          <div style={{padding:"1vh"}}/>
          <Link to="/Blog" className="error_backbtn">Return</Link>
        </div>
        <div className="col-md-6 col-sm-12">
          <img alt="Error" src={errorimg} className="error_img"/>
        </div> 
      </div>
      <div style={{padding:"5vh"}}/>
    </motion.div>
  )
}

export default Error;
