import { Paper,List } from "@mui/material";
import React, { useEffect } from "react";
import Event from "./Event/Event";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbarr from "../Navbarr/Navbarr";
import { fetchBooking, getBookings } from "../../actions/bookings";

function Disclaimer({user,setUser}){
    const {emailId,track} = useParams();
    const navigate = useNavigate();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        console.log("in");
        navigate("/user/login");
    };
    const [data,setData] = useState([]);
    useEffect(()=>{
        console.log("called");
        fetchBooking()
            .then(data => setData(data.filter((entry=>{
                const currDate = new Date(entry.event_day).toLocaleDateString();
            const today = new Date().toLocaleDateString();
                return ((currDate == today) && entry.booking_status === "APPROVED");
            }))));
    },[]);
    return(
        <div class = "backgroundDisclaimer">
            <div class="marginDisclaimer"></div>
            <Navbarr user = {user} setUser={setUser}/>

            <List >
            {data.map((entry)=>{
                console.log(entry);
                return <Event key = {entry.booking_id} event = {entry}/>
            })}
                <Event/>
            </List>
        </div>
    )
}

export default Disclaimer;