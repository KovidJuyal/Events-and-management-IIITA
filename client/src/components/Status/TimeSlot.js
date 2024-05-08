import React from "react";
import { fetchBooking, } from "../../actions/bookings";

function TimeSlot({user,setUser,setData,eventSlot,setEventSlot}){
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitted");
        console.log(eventSlot);
        fetchBooking().then(data => setData(data.filter((entry)=>{
            if (eventSlot.currStatus == "NONE" && eventSlot.building_id == "0")
            return (new Date(eventSlot.evDate).toLocaleDateString() == new Date(entry.event_day).toLocaleDateString());
        else if (eventSlot.currStatus == "NONE"){
            return ((new Date(eventSlot.evDate).toLocaleDateString() == new Date(entry.event_day).toLocaleDateString()) 
            && (eventSlot.building_id == entry.building_id));
        }
        else if (eventSlot.building_id == "0"){
                console.log(entry);
                console.log(((new Date(eventSlot.evDate).toLocaleDateString() == new Date(entry.event_day).toLocaleDateString()) 
                && (eventSlot.currStatus == entry.booking_status)));
                return ((new Date(eventSlot.evDate).toLocaleDateString() == new Date(entry.event_day).toLocaleDateString()) 
                        && (eventSlot.currStatus == entry.booking_status));
            }
            else{
                return ((new Date(eventSlot.evDate).toLocaleDateString() == new Date(entry.event_day).toLocaleDateString()) 
                        && (eventSlot.currStatus == entry.booking_status)
                        && (eventSlot.building_id == entry.building_id));
            }
        })));
        setEventSlot({...eventSlot,marked : true});
    }
    return(
        <div class="backgroundDisclaimer">
        <div class="marginDisclaimer"></div>
        <div class="backgroundSlot">
                <div class="shapeSlot"></div>
                <div class="shapeSlot"></div>
            </div>
            <form class = "formSlot" autoComplete="off" onSubmit={handleSubmit}>
                <h3 class = "heading3Slot">Event Status</h3>

                <label class = "labelSlot" for="evDate">Event Date</label>
                <input class = "inputSlot" type="date" placeholder="Event Date" id="evDate" 
                    required 
                    onChange= {(newValue)=> setEventSlot({...eventSlot,evDate : new Date(newValue.target.value)})}
                />

                <label class = "labelSlot" for="buildingId">Building</label>
                <select class = "inputSlot" id = "buildingId"
                    onChange={(e)=>setEventSlot({...eventSlot,building_id : e.target.value})}>
                    <option class ="optionSlot" value={0}><em>NONE</em></option>
                    <option class ="optionSlot" value={1}>SAC</option>
                    <option class ="optionSlot" value={2}>AAA</option>
                    <option class ="optionSlot" value={3}>Auditorium</option>
                    <option class ="optionSlot" value={4}>BasketBall Court</option>
                    <option class ="optionSlot" value={5}>Cafeteria</option>
                    <option class ="optionSlot" value={6}>Lecture Threature</option>
                    <option class ="optionSlot" value={7}>Clock Tower</option>
                    <option class ="optionSlot" value={8}>Main Ground</option>
                    <option class ="optionSlot" value={9}>Pavilion</option>
                </select>
                
                <label class = "labelSlot" for="currStatus">Current Status</label>
                <select class = "inputSlot" id = "currStatus"
                    onChange={(e)=>setEventSlot({...eventSlot,currStatus : e.target.value})}>

                    <option class ="optionSlot" value={"NONE"}><em>NONE</em></option>
                    <option class ="optionSlot" value={"APPROVED"}>APPROVED</option>
                    <option class ="optionSlot" value={"COMPLETED"}>COMPLETED</option>
                    <option class ="optionSlot" value={"DENIED"}>DENIED</option>
                    <option class ="optionSlot" value={"REQUESTED"}>REQUESTED</option>
                </select>

                <button class = "buttonSlot">Next</button>
            </form>
    </div>
    )
}

export default TimeSlot;