import React, { useState } from "react";
import "./createstyle.css"

import axios from "axios";
import { motion } from "framer-motion";

function Create() {

  const [alert,alertchanger]=useState("")

  const [subject,subjectchanger]=useState("");
  const [picture,picturechanger]=useState("");
  const [name,namechanger]=useState("");
  const [profile,profilechanger]=useState("");
  const [title,titlechanger]=useState("");
  const [content,contentchanger]=useState("");
  const [password,passwordchanger]=useState("");

  function subjecthandel(event){subjectchanger(event.target.value)}
  function picturehandel(event){picturechanger(event.target.value)}
  function namehandel(event){namechanger(event.target.value)}
  function profilehandel(event){profilechanger(event.target.value)}
  function titlehandel(event){titlechanger(event.target.value)}
  function contenthandel(event){contentchanger(event.target.value)}
  function passwordhandel(event){passwordchanger(event.target.value)}

  function btnclicked(){

    if(password===process.env.REACT_APP_PASS_KEY){
      axios.post(process.env.REACT_APP_ADD_KEY,
        {subject:subject,picture:picture,name:name,profile:profile,title:title,content:content});
      subjectchanger("")
      picturechanger("")
      namechanger("")
      profilechanger("")
      titlechanger("")
      contentchanger("")
      alertchanger("Blog Submited");
      setTimeout(function(){
        alertchanger("");
      }, 2000)
    }
    else{
      alertchanger("Wrong Password Please Check Again");
      setTimeout(function(){
        alertchanger("");
      }, 2000)
    }
  }



  return(
    <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="create_div">
      <div className="container">
      <div style={{padding:"1.5%"}}/>
        <span className="create_heading">Create</span>
        <div style={{padding:"1.5%"}}/>
        <div className="row">
          <div className="col-md-6 col-sm-12">     
              <div className="floating-label">      
                <input onChange={subjecthandel} value={subject} className="floating-input" type="text" placeholder=" "/>
                <label>Subject</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">     
              <div className="floating-label">      
                <input onChange={picturehandel} value={picture} className="floating-input" type="text" placeholder=" "/>
                <label>Picture Url</label>
              </div>
            </div> 

          <div className="col-12" style={{padding:"1%"}}/>

          <div className="col-md-6 col-sm-12">     
            <div className="floating-label">      
              <input onChange={namehandel} value={name} className="floating-input" type="text" placeholder=" "/>
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">     
            <div className="floating-label">      
              <input onChange={profilehandel} value={profile} className="floating-input" type="text" placeholder=" "/>
              <label>Profile Url</label>
            </div>
          </div>

          <div className="col-12" style={{padding:"1%"}}/>

          <div className="col-12">     
            <div className="floating-label">      
              <input onChange={titlehandel} value={title} className="floating-input" type="text" placeholder=" "/>
              <label>Tittle</label>
            </div>
          </div>

          <div className="col-12" style={{padding:"1%"}}/>

          <div className="col-12">     
            <div className="floating-label">      
              <textarea  onChange={contenthandel} value={content} className="floating-input txb" type="text" placeholder=" "/>
              <label>Content</label>
            </div>
          </div>

          <div className="col-12" style={{padding:"1%"}}/>

          <div className="col-12">     
            <div className="floating-label">      
              <input  onChange={passwordhandel} value={password} className="floating-input" type="password" placeholder=" "/>
              <label>Password</label>
            </div>
          </div>

          <div style={{padding:"1%"}}/>

        </div>
        <div className="create_btn_div">
          <button onClick={btnclicked} className="create_btn">Add</button>
        </div>

        <div style={{padding:"0.25%"}}/>

        <p className="create_alert">{alert}</p>

        <div style={{padding:"2.5%"}}/>
      </div>
    </motion.div>
  )
}

export default Create;
