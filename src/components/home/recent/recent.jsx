import React from "react";
import "./recentstyle.css"

import {Link} from "react-router-dom";

function Recent(props) {
  return(
    <div className="recent_div">
      <div style={{padding:"1%"}}/>
      <span className="recent_lineone">Recent</span>
      <div style={{padding:"1%"}}/>
      <div className="recent_data">
        <Link className="recent_link" to={`/Blog/page/${props.pos}`}>
          <div className="row">
            <div className="col-md-4 col-sm-12 recent_alldatas_left">
              <img src={props.fullone.picture} alt="MainPicture" className="recent_img"/>
            </div>

            <div className="recent_alldatas_right col-md-8 col-sm-12">
              <div style={{padding:"1%"}}/>
              <span className="recent_subject">{props.fullone.subject}</span>
              <span className="recent_date">{props.fullone.date.slice(0,10)}</span>
              <div style={{padding:"2%"}}/>
              <span className="recent_title">{props.fullone.title}</span>
              <span className="recent_details">{props.fullone.content}</span>
              <div style={{padding:"2.5%"}}/>
              <img className="recent_profile" alt="ProfilePicture" src={props.fullone.profile}/>
              <span className="recent_name">{props.fullone.name}</span>
              <div style={{padding:"1%"}}/>
            </div>
          </div>
        </Link>
      </div>
      <div style={{padding:"3%"}}/>
    </div>
  )
}

export default Recent;
