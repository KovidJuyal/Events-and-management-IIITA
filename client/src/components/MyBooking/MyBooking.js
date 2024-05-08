import { List } from "@mui/material";
import React, { useEffect } from "react";
import Event from "../Disclaimer/Event/Event";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbarr from "../Navbarr/Navbarr";
import { fetchBooking, getBookings } from "../../actions/bookings";

function MyBooking({user,setUser}){
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
                console.log(entry);
                console.log(entry.user_id);
                console.log(user.emailId);
                console.log((data.user_id == user.emailId));
                return (entry.user_id == user.emailId);
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

export default MyBooking;