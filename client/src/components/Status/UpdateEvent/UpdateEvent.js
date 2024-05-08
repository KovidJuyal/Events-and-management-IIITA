import { useDispatch } from "react-redux";
import { updateBooking } from "../../../actions/bookings";
import { useNavigate } from "react-router-dom";

function UpdateEvent({setUser,eventSlot,setEventSlot,user}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(eventSlot);
        console.log(user);
        const event = {...eventSlot,...user};
        dispatch(updateBooking(event,navigate));
    }
    return (
        <div class="backgroundDisclaimer">
        <div class="marginDisclaimer"></div>
        <div class="backgroundRequestSlot">
                <div class="shapeRequestSlot"></div>
                <div class="shapeRequestSlot"></div>
            </div>
            <form class = "formRequestSlot" autoComplete="off" onSubmit={handleSubmit}>
                <h3 class = "heading3RequestSlot">Update Status</h3>


                <label class = "labelRequestSlot" for="eventId">Event Id</label>
                <label class = "labelRequestSlot" for="eventDay">Day</label>
                <input class = "inputRequestSlot" type="text"  id="eventId" value = {eventSlot.event_id} 
                   readOnly
                />
                <input class = "inputRequestSlot" type="text"  id="eventDay" value = {new Date(eventSlot.event_day).toLocaleDateString()} 
                   readOnly
                />


                <label class = "labelRequestSlot" for="sTime">Start Time</label>
                <label class = "labelRequestSlot" for="eTime">End Time</label>
                <input class = "inputRequestSlot" type="text"  id="sTime" value = {new Date(eventSlot.start_time).toLocaleTimeString()} 
                   readOnly
                />
                <input class = "inputRequestSlot" type="text"  id="eTime" value = {new Date(eventSlot.end_time).toLocaleTimeString()} 
                   readOnly
                />


                <label class = "labelRequestSlot" for="roomNo">Room No</label>
                <label class = "labelRequestSlot" for="heading">Heading</label>
                <input class = "inputRequestSlot" type="text"  id="roomNo" value = {eventSlot.room}
                   readOnly
                />
                <input class = "inputRequestSlot" type="heading"  id="endTime" value = {eventSlot.desc_Heading}
                    readOnly
                />
                <label class = "labelRequestSlot" for="currStatus">Current Status</label>
                <select class = "selectRequestSlot" id = "currStatus"
                    onChange={(e)=>setEventSlot({...eventSlot,currStatus : e.target.value})}>

                    <option class ="optionRequestSlot" value={"NONE"}><em>NONE</em></option>
                    <option class ="optionRequestSlot" value={"APPROVED"}>APPROVED</option>
                    <option class ="optionRequestSlot" value={"COMPLETED"}>COMPLETED</option>
                    <option class ="optionRequestSlot" value={"DENIED"}>DENIED</option>
                </select>

                <button class = "buttonRequestSlot">Update Booking</button>
            </form>
    </div>
    )
}

export default UpdateEvent;