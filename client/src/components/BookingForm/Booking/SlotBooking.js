import React,{useState} from "react";
import {Paper,Box,Button,} from "@mui/material";
import buildingTrack from "../../../constants/constant";
import useStyles from "./styles";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function SlotBooking({ user,curid,eventSlot,setEventSlot,bookingB,setBookingB,formStep,setFormStep}) {
    console.log(bookingB);
    const classes = useStyles();
    const handleSubmit = (event)=>{
        console.log(eventSlot);
        event.preventDefault();
        
        if (eventSlot.startTime.getTime() > eventSlot.endTime.getTime()){
            alert("Start Time should be less than endTime");
            clear();
        }
        else{
            //check already booked
            let flag = 0;
            console.log(bookingB);
            bookingB.forEach(element => {
                if (flag === 0 && element.event_day === event.evDate){
                    if (element.start_time > event.endTime || element.end_time < event.startTime){}
                    else{
                        console.log(element);
                        flag = 1;
                        alert("Slot Already Booked! Please Check Booked Schedule!");
                    }

                }
            });
            //if not already booked
            if (flag === 0){
                alert("Slot Available Can Proceed");
                console.log(eventSlot);
                setFormStep({...formStep,slotBook : true});
            }

        }
    }
    const clear = ()=>{
        setEventSlot({evDate : new Date(),startTime : new Date(), endTime : new Date()});
    }
    const handleSTime = (newValue)=>{
        let val = newValue.target.value;
        let tempT = new Date(eventSlot.evDate);
        let time1 = val[0] + "" + val[1];
        let time2 = val[3] + "" + val[4];
        tempT.setHours(time1);
        tempT.setMinutes(time2);
        console.log(tempT);

        setEventSlot({...eventSlot,startTime : new Date(tempT)})
    }
    const handleETime = (newValue)=>{
        let val = newValue.target.value;
        let tempT = new Date(eventSlot.evDate);
        let time1 = val[0] + "" + val[1];
        let time2 = val[3] + "" + val[4];
        tempT.setHours(time1);
        tempT.setMinutes(time2);
        console.log(tempT);

        setEventSlot({...eventSlot,endTime : new Date(tempT)})
    }
    
    return (
        <div class="backgroundDisclaimer">
        <div class="marginDisclaimer"></div>
        <div class="backgroundSlot">
                <div class="shapeSlot"></div>
                <div class="shapeSlot"></div>
            </div>
            <form class = "formSlot" autoComplete="off" onSubmit={handleSubmit}>
                <h3 class = "heading3Slot">{buildingTrack[user.building]}</h3>

                <label class = "labelSlot" for="evDate">Event Date</label>
                <input class = "inputSlot" type="date" placeholder="Event Date" id="evDate"
                    required 
                    onChange= {(newValue)=> setEventSlot({...eventSlot,evDate : new Date(newValue.target.value)})}
                />

                <label class = "labelSlot" for="startTime">Start Time</label>
                <input class = "inputSlot" type="time" placeholder="start time" id="startTime" 
                    required 
                    onChange= {handleSTime}
                />
                <label class = "labelSlot" for="endTime">End Time</label>
                <input class = "inputSlot" type="time" placeholder="end time" id="endTime" 
                    required 
                    onChange= {handleETime}
                />

                <button class = "buttonSlot">Next</button>
            </form>
    </div>
    );
}
export default SlotBooking;
