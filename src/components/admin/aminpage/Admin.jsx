import React from "react";
import "./adminpagenstyle.css"
import { motion } from "framer-motion";
import {useSelector} from "react-redux";
import Postedit from "./Postedit/Postedit.jsx";
function Adminpage() {
  const alldata = useSelector((state)=>state);
  return(
      <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="container">
        <div style={{padding:"3vh"}}/>
        <p className="admin_lineone">List Of All Blogs</p>
        {alldata.alldata.data.map(function(da,index){
            return <Postedit full={da} pos={index} key={index}/> 
        })}
        <div style={{padding:"3vh"}}/>
      </motion.div>
    )
}
export default Adminpage;
