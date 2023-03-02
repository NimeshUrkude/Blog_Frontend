import React, { useEffect, useState } from "react";
import "./homestyle.css"

import Recent from "./recent/recent.jsx";
import Other from "./other/other.jsx";

import axios from "axios";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import {setData} from "../redux/actions/dataaction.js";

function Home() {

  const dispatch = useDispatch();
  const [data,datachanger]=useState(null);

  
    useEffect(()=>{
      async function fetchapi(){
        await axios.get(process.env.REACT_APP_COUT_KEY).then(function(res){
          datachanger(res.data);
          dispatch(setData(res.data));
        })
      }
      fetchapi()
    },[dispatch]);

    if(data===null){
      return(
        <div className="lds-dual-ring"></div>
      )
    }
    else{
      return(
        <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="container">
          <Recent fullone={data[(data.length-1)]} pos={(data.length-1)} />
          <div className="row">
              {data.map(function(da,index){
                if(index!==(data.length-1)){
                  return <Other full={da} pos={index} key={index}/>
              }
              return null;
           })}
        </div>
        <div style={{padding:"2%"}}/>
      </motion.div>
      )
    }
  
}


export default Home;
