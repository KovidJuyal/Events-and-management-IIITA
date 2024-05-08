import React from "react";
import { List } from "@mui/material";
import EventPage from "./EventPage";
import AdminNavbar from "../../AdminNavbarr/AdminNavbarr";
function Event({user,setUser,setEventSlot,eventSlot,data}){
  return (
    <div class="backgroundDisclaimer">
        <div class="marginDisclaimer"></div>
        <AdminNavbar user={user} setUser={setUser}></AdminNavbar>

        <h1 class="heading1Event">Filterd Bookings</h1>
    <List >
    {data.map((entry)=>{
        return <EventPage setEventSlot= {setEventSlot} eventSlot={eventSlot} key = {entry.booking_id} event = {entry}/>
    })}
        <EventPage/>
    </List>
    </div>
  )
}

export default Event;