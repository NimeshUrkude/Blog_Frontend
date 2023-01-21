import React, { useState } from "react";
import "./loginstyle.css"
import { motion } from "framer-motion";
function Login(props) {
  const [password,setpassword]=useState("");
  const [alert,alertchanger] = useState("");

  function eventhandelinput(event){
    setpassword(event.target.value);
  }

  function checkchange(){
    if(password===process.env.REACT_APP_PASS_KEY){
      props.setcheck(!props.check);
    }
    else{
      alertchanger("Wrong Password Please Check Again");
      setTimeout(function(){
        alertchanger("");
      }, 2000)
      setpassword("");
    }
  }
  return(
      <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="admin_login_div">
        <div className="col-lg-4 col-md-6 col-sm-8 admin_login_inner_div shadow-lg bg-white rounded">
          <p className="admin_login_lineone">Admin Login</p>
          <input type="password" value={password} className="form-control" onChange={eventhandelinput} placeholder="Password" />
          <button className="mt-3 btn btn-outline-dark" onClick={checkchange}>Submit</button>
          <p className="admin_login_linetwo">{alert}</p>
        </div>
      </motion.div>
    )
}

export default Login;
