import React, { useState } from "react";
import "./adminstyle.css"
import Login from "./login/Login.jsx";
import Adminpage from "./aminpage/Admin.jsx";
function Admin() {

  const [check,setcheck]=useState(false);

  if(check===false){return(
    <Login check={check} setcheck={setcheck}/>)}
  else{return(
      <Adminpage/>)}
}

export default Admin;
