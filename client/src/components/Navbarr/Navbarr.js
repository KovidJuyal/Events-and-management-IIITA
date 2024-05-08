import React from "react";
import {
    BrowserRouter as Router,
    useNavigate
 } from "react-router-dom";
 
function Navbarr({user,setUser}){
    const navigate = useNavigate();
    const homeUrl = "/user/" + user.emailId + "/" + user.track;
    const bookUrl = homeUrl + "/book";
    const viewUrl = homeUrl + "/view";
    const myBookingUrl = homeUrl + "/mybooking";
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
                <li class = "liNavbar"><a onClick = {()=>navigate(bookUrl)} class="active1Navbar aNavbar">Book</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(viewUrl)} class="active2Navbar aNavbar">View</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(contactUrl)} class="active3Navbar aNavbar">Contact</a></li>
                <li class = "liNavbar"><a onClick = {()=>navigate(myBookingUrl)} class="active4Navbar aNavbar">My Bookings</a></li>
                <li class = "liNavbar"><a onClick = {handleLogout} class="active1Navbar aNavbar">LogOut</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Navbarr;