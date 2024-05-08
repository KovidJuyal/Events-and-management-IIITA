import React,{useState} from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import SlotBooking from "./Booking/SlotBooking";
import EventBooking from "./Booking/EventBooking";
import FinalBooking from "./Booking/FinalBooking";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm({ user,setUser }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const {emailId,track,id} = useParams();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track && id == user.building)){
        console.log("in");
        navigate("/user/login");
    };
    //have booking
    const {bookings} = useSelector((state)=>state.bookings);

    //have booking of building
    const [bookingB,setBookingB] = useState(
        bookings.filter((booking)=>{
            return (booking.building_id === user.building);
        })
    );
    //new Event Entry
    const [eventSlot,setEventSlot] = useState({
        evDate : new Date(),
        startTime : new Date(),
        endTime : new Date(),
        building_id : user.building,
    });
    const [eventDetail,setEventDetail] = useState({
        room : " ",
        heading : " ",
        body : " ",
        building_id : user.building,
        event_id : nanoid()
    })
    const [formStep,setFormStep] = useState({
        slotBook : false,
        eventBook : false,
        finalBook : false
    });
    return (
        <div>

            {/* step 1 */}
                {formStep.slotBook === false ? <SlotBooking curid={user.building} user = {user}
                                    eventSlot = {eventSlot} setEventSlot={setEventSlot} 
                                    bookingB={bookingB} setBookingB={setBookingB} 
                                    formStep={formStep} setFormStep={setFormStep}/> : <></>}
            {/* step 2 */}
            {(formStep.slotBook === true && formStep.eventBook === false) ? <EventBooking curid={user.building} user = {user}
                                eventDetail = {eventDetail} setEventDetail={setEventDetail}
                                formStep={formStep} setFormStep={setFormStep}/> : <></>}

            {/* step 3 */}
            {(formStep.slotBook === true && formStep.eventBook === true && formStep.finalBook === false) ? <FinalBooking curid={user.building} user = {user}
                                eventDetail = {eventDetail} eventSlot = {eventSlot}
            /> : <></>}
        </div>
    );
}
export default BookingForm;
