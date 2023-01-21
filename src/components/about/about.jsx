import React from "react";
import "./aboutstyle.css";

import { motion } from "framer-motion";

function About() {
  return(
    <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="about_div">
      <div className="container about_lines">
        <div style={{padding:"5vh"}}/>
        <span className="about_heading">About</span>
        <div style={{padding:"7vh"}}/>
        <span className="about_line">Hello My Name is <b>Nimesh Urkude</b></span>
        <div style={{padding:"1%"}}/>
        <span className="about_line">And this is a <b>Blog Project</b> on <b>MERN</b></span>
        <div style={{padding:"1%"}}/>
        <span className="about_line">Where Home page have recent blogs on top and all remaning blog below</span>
        <div style={{padding:"1%"}}/>
        <span className="about_line">Create page has fields to create a new blog with a Password to check Permission to add to Database</span>
        <div style={{padding:"15vh"}}/>
      </div>
    </motion.div>
  )
}

export default About;
