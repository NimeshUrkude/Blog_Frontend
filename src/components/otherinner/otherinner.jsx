import React from "react";
import "./otherinnerstyle.css";

import { motion } from "framer-motion";

import {useParams } from 'react-router-dom';
import {useSelector} from "react-redux";

function Otherinner() {

  let { page } = useParams();
  const alldata = useSelector((state)=>state);

  return(
    <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="container otherinnerdiv">
      <div style={{padding:"3%"}}/>
            <div className="row otherinner_data">
        <div className="col-lg-5 col-md-12 otherinner_alldatas_left">
          <img src={alldata.alldata.data[page].picture} alt="MainPicture" className="otherinner_img"/>
        </div>

        <div className="otherinner_alldatas_right col-lg-7 col-md-12">
            <div style={{padding:"1%"}}/>
            <span className="otherinner_subject">{alldata.alldata.data[page].subject}</span>
            <span className="otherinner_date">{alldata.alldata.data[page].date.slice(0,10)}</span>
            <div style={{padding:"2%"}}/>
            <span className="otherinner_title">{alldata.alldata.data[page].title}</span>
            <span className="otherinner_details">{alldata.alldata.data[page].content}</span>
            <div style={{padding:"2.5%"}}/>
            <img className="otherinner_profile" alt="ProfilePicture" src={alldata.alldata.data[page].profile}/>
            <span className="otherinner_name">{alldata.alldata.data[page].name}</span>
            <div style={{padding:"1%"}}/>
        </div>

      </div>
      <div style={{padding:"3%"}}/>
    </motion.div>
  )
}

export default Otherinner;