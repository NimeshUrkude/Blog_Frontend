import React from "react";
import "./footerstyle.css"
import {Link} from "react-router-dom";

function Footer() {
  return(
    <div className="footer_div">
      <div className="container">
      <div style={{padding:"0.5%"}}/>
        <div className="row">

          <div className="footer_left col-6">
            <span className="footer_left_tittle" >Blogger</span>
            <div style={{padding:"0.5%"}}/>
            <div>
            <i className="fontosm fa-brands fa-facebook"></i>
            <i className="fontosm fa-brands fa-twitter"></i>
            <i className="fontosm fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="footer_right col-6">
            <span className="footer_right_txt">Home</span>
            <span className="footer_right_txt">Create</span>
            <span className="footer_right_txt">About</span>
            <Link to="/Blog_Frontend/admin" className="footer_right_txt footer_right_txt_admin">Admin</Link>
          </div>

          

        </div>
        <div style={{padding:"0.5%"}}/>
        <span className="footer_a">© Blogger Project Inc.</span>
        <div style={{padding:"0.5%"}}/>
      </div>
    </div>
  )
}

export default Footer;
