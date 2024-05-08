import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate
 } from "react-router-dom";
 
function AdminNavbar({user,setUser}){
    const navigate = useNavigate();
    const homeUrl = "/admin/" + user.emailId + "/" + user.track;
    const statusUrl = homeUrl + "/status";
    const viewUrl = homeUrl + "/view";
    const contactUrl = homeUrl + "/contact";
    const handleLogout = ()=>{
        setUser({
            userid : "",
            auth : 0,
            track : "",
            building : "",
            type : "",
        });
        navigate("/");
    }
    return (
        <div>
        <div class="html-sectionNavbar">
        <div class="html-projectNavbar">
          <div class="navigationNavbar">
            <nav class="navNavbar">
              <ul class="ulNavbar">
                <li class = "liNavbar"><a class="aHeadingNavbar">Elite</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(homeUrl)}  class="activeNavbar aNavbar">Home</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(statusUrl)} class="active1Navbar aNavbar">Status</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(viewUrl)} class="active2Navbar aNavbar">View</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(contactUrl)} class="active3Navbar aNavbar">Contact</a></li>
                <li class = "liNavbar"><a onClick = {handleLogout} class="active3Navbar aNavbar">LogOut</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
        </div>
    )
}
export default AdminNavbar;