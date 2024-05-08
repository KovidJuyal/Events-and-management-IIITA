import { Paper,List } from "@mui/material";
import React, { useEffect } from "react";
import Event from "../Disclaimer/Event/Event";
import { useSelector} from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbarr from "../Navbarr/Navbarr";
import { fetchBooking } from "../../actions/bookings";
import AdminNavbar from "../AdminNavbarr/AdminNavbarr";

function AdminHomePage({user,setUser}){
    
    const {emailId,track} = useParams();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        console.log("in");
        navigate("/admin/login");
    };
    const [data,setData] = useState([]);
    console.log(data);
    useEffect(()=>{
        console.log("called");
        fetchBooking()
            .then(data => setData(data.filter((booking)=>{
                const currDate = new Date(booking.event_day).toLocaleDateString();
            const today = new Date().toLocaleDateString();
            return ((currDate == today));
            })));
    },[]);
    console.log(data);
    return(
        <div class = "backgroundDisclaimer">
            <div class="marginDisclaimer"></div>
            <AdminNavbar user = {user} setUser={setUser}/>
            <List >
            {data == undefined ? <></> : data.map((entry)=>{
                return <Event key = {entry.booking_id} event = {entry}/>
            })}
                <Event/>
            </List>
        </div>
    )
}

export default AdminHomePage;