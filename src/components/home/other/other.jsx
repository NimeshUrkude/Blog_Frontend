import React from "react";
import "./otherstyle.css"

import {Link} from "react-router-dom";

function Name(props) {

  
  return(
    <div className="other_div col-lg-3 col-md-4 col-sm-6 col-6">
    <Link className="other_link" to={`/Blog/page/${props.pos}`}>
      <div className="other_div_inner">
        <img className="other_img" alt="MainPicture" src={props.full.picture}/>
        <div className="other_data">
          <div className="other_data_inner">
            <span className="other_subject">{props.full.subject}</span>
            <span className="other_date">{props.full.date.slice(0,10)}</span>
            <div style={{padding:"5%"}}/>
            <span className="other_title">{props.full.title}</span>
            <span className="other_details">{props.full.content}</span>
            <div style={{padding:"5%"}}/>
            <img className="other_profile" alt="ProfilePicture" src={props.full.profile}/>
            <span className="other_name">{props.full.name}</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Name;
