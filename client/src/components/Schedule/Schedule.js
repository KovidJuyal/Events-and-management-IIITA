import React,{useEffect, useState} from "react";
import { List} from "@mui/material";
import SlotSelection from "./Slot/SlotSelection";
import Event from "../Disclaimer/Event/Event";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBooking } from "../../actions/bookings";
import Navbarr from "../Navbarr/Navbarr";

function Schedule({user,setUser}){
    const {emailId,track,id} = useParams();
    const navigate = useNavigate();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track && id == user.building)){
        console.log("in");
        navigate("/login");
    };
    const [eventSlot,setEventSlot] = useState({
        evDate : new Date(),
        startTime : new Date(),
        endTime : new Date(),
        building_id : user.building,
        slotBook : false
    });

    const [data,setData] = useState([]);
    useEffect(()=>{
        console.log("called");
        fetchBooking()
            .then(data => setData(data.filter((entry=>{
                const currDate = new Date(entry.event_day).toLocaleDateString();
            const today = new Date(eventSlot.evDate).toLocaleDateString();
                return ( (eventSlot.building_id == entry.building_id) && (currDate == today) && (entry.booking_status === "APPROVED"));
            }))));
    },[]);
    return (
        <div>
            {/* step1 */}
            {eventSlot.slotBook === false ? <SlotSelection setUser={setUser} eventSlot= {eventSlot} 
                setEventSlot = {setEventSlot} data={data} setData = {setData}
                     user = {user}
            />: <div class="backgroundDisclaimer">
                <div class="marginDisclaimer"></div>
                <Navbarr user={user} setUser={setUser}></Navbarr>

                <h1 class="heading1Event">Filterd Bookings</h1>
                        <List >
                        {data.map((entry)=>{
                            return <Event key = {entry.booking_id} event = {entry}/>
                        })}
                            <Event/>
                        </List>
                </div>}

        </div>
    )
}

export default Schedule;