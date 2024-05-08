import React from "react";
import {Paper,Box,Button, TextField,} from "@mui/material";
import useStyles from "./styles.js";
import buildingTrack from "../../../constants/constant";
import {  useDispatch} from "react-redux";
import { requestBooking } from "../../../actions/bookings.js";
import { useNavigate } from 'react-router-dom';


function FinalBooking({user,curid,eventDetail,eventSlot}){
    const classes = useStyles();
    const sTime =  new Date(eventSlot.startTime).toLocaleTimeString();
    const day =  new Date(eventSlot.evDate).toLocaleDateString();
    const eTime = new Date(eventSlot.endTime).toLocaleTimeString();
    console.log(eTime);
    console.log(eventSlot);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const eventBook = {...eventDetail,...eventSlot,...user};
        console.log(eventBook);
        dispatch(requestBooking(eventBook,navigate));
        console.log(eventBook);
        alert("Request has been Sent.Thank You For booking");
    }
    return(
        <div class="backgroundDisclaimer">
        <div class="marginDisclaimer"></div>
        <div class="backgroundRequestSlot">
                <div class="shapeRequestSlot"></div>
                <div class="shapeRequestSlot"></div>
            </div>
            <form class = "formRequestSlot" autoComplete="off" onSubmit={handleSubmit}>
                <h3 class = "heading3RequestSlot">{buildingTrack[user.building]}</h3>


                <label class = "labelRequestSlot" for="eventId">Event Id</label>
                <label class = "labelRequestSlot" for="eventDay">Day</label>
                <input class = "inputRequestSlot" type="text"  id="eventId" value = {eventDetail.event_id} 
                   readOnly
                />
                <input class = "inputRequestSlot" type="text"  id="eventDay" value = {day} 
                   readOnly
                />


                <label class = "labelRequestSlot" for="sTime">Start Time</label>
                <label class = "labelRequestSlot" for="eTime">End Time</label>
                <input class = "inputRequestSlot" type="text"  id="sTime" value = {sTime} 
                   readOnly
                />
                <input class = "inputRequestSlot" type="text"  id="eTime" value = {eTime} 
                   readOnly
                />


                <label class = "labelRequestSlot" for="roomNo">Room No</label>
                <label class = "labelRequestSlot" for="heading">Heading</label>
                <input class = "inputRequestSlot" type="text"  id="roomNo" value = {eventDetail.room}
                   readOnly
                />
                <input class = "inputRequestSlot" type="heading"  id="heading" value = {eventDetail.heading}
                    readOnly
                />


            <label class = "labelRequestSlot" for="evDesc">Event Description</label>
                <textarea rows="3" class = "textAreaRequestSlot" type="text" placeholder="Event Description" id="evDesc" 
                    value = {eventDetail.body} required label="Event Description" 
                    readOnly
                />



                <button class = "buttonRequestSlot">Request Booking</button>
            </form>
        </div>
    )
}
export default FinalBooking;