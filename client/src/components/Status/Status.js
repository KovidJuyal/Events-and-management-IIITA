import { useNavigate, useParams } from "react-router-dom";
import TimeSlot from "./TimeSlot";
import { useState } from "react";
import Event from "./Events/Events";
import UpdateEvent from "./UpdateEvent/UpdateEvent";

function Status({user,setUser}){
    const {emailId,track} = useParams();
    const navigate = useNavigate;
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        console.log("in");
        navigate("/admin/login");
    };
    const [eventSlot,setEventSlot] = useState({
        evDate : new Date(),
        building_name : "",
        currStatus :"NONE",
        building_id : 0,
        marked : false,
        evId : "none",
    });
    const [data,setData] = useState([]);
    return (
        (eventSlot.marked === false) ?( <TimeSlot user = {user} setUser = {setUser} setData = {setData} eventSlot = {eventSlot} setEventSlot = {setEventSlot}/> )
        : (eventSlot.evId == "none" ? <Event user={user} setUser={setUser} setEventSlot = {setEventSlot} eventSlot = {eventSlot} data = {data}/> : <UpdateEvent user = {user} setUser = {setUser} setEventSlot={setEventSlot}eventSlot={eventSlot}/>)
    )
}

export default Status;

