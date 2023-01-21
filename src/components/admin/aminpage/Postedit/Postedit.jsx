import React from "react";
import "./posteditstyle.css"
import axios from "axios";
function Adminpage(props) {

  function delit(){
    axios.post(process.env.REACT_APP_DEL_KEY,{delid:props.full._id});
  }

  return(
    <div className="postedit_div">
      <p className="postedit_txt">{props.pos+1}.</p>
      <p className="postedit_txt">{props.full.name}</p>
      <p className="postedit_txt">{props.full.title}</p>
      <button onClick={delit} className="btn postedit_btn btn-outline-danger">Del</button>
    </div>
    )
}
export default Adminpage;
