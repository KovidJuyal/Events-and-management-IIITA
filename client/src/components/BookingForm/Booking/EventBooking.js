import React from "react";
import {Paper,Box,Button, TextField,} from "@mui/material";
import useStyles from "./styles";
import buildingTrack from "../../../constants/constant";

function EventBooking({user,curid,eventDetail,setEventDetail,formStep,setFormStep}){
    const classes = useStyles();
    const handleSubmit = (event)=>{
        setFormStep({...formStep,eventBook : true});
    }
    return(
        <div class="backgroundDisclaimer">
        <div class="marginDisclaimer"></div>
        <div class="backgroundSlot">
                <div class="shapeSlot"></div>
                <div class="shapeSlot"></div>
            </div>
            <form class = "formSlot" autoComplete="off" onSubmit={handleSubmit}>
                <h3 class = "heading3Slot">{buildingTrack[user.building]}</h3>

                <label class = "labelSlot" for="roomNo">Room No</label>
                <input class = "inputSlot" type="text" placeholder="Room No" id="roomNo" 
                    value = {eventDetail.room} label="Room No" onChange={(e)=> setEventDetail({...eventDetail,room : e.target.value})}
                />

                <label class = "labelSlot" for="evHeading">Event Heading</label>
                <input class = "inputSlot" type="text" placeholder="Event Heading" id="evHeading" 
                    value = {eventDetail.heading} required label="Event Heading" onChange={(e)=>setEventDetail({...eventDetail,heading : e.target.value})}
                />
                <label class = "labelSlot" for="evDesc">Event Description</label>
                <textarea rows="5" class = "textAreaSlot" type="text" placeholder="Event Description" id="evDesc" 
                    value = {eventDetail.body} required label="Event Description" onChange={(e)=>setEventDetail({...eventDetail,body : e.target.value})}
                />

                <button class = "buttonSlot">Next</button>
            </form>
        </div>
    )
}
export default EventBooking;