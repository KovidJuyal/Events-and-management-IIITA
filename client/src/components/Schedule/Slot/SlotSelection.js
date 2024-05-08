import React from "react";
import buildingTrack from "../../../constants/constant";
function SlotSelection({ user,setUser,eventSlot,setEventSlot,data,setData}) {
    const handleSubmit = (event)=>{
        event.preventDefault();

        if (eventSlot.startTime.getTime() > eventSlot.endTime.getTime()){
            alert("Start Time should be less than endTime");
            clear();
        }
        else{
            console.log(eventSlot);
            console.log(data);
            setData(
                data.filter((bookings)=>{
                    const d1 = new Date(bookings.event_day).toLocaleDateString();
                    const d2 = new Date(eventSlot.evDate).toLocaleDateString();
                    return ( d1 == d2  );
                })
            )
            setEventSlot({...eventSlot,slotBook : true});
        }
    }
    const clear = ()=>{
        setEventSlot({evDate : new Date(),startTime : new Date(), endTime : new Date(),slotBook :false});
    }

    const handleSTime = (newValue)=>{
        let val = newValue.target.value;
        let tempT = new Date(eventSlot.evDate);
        let time1 = val[0] + "" + val[1];
        let time2 = val[3] + "" + val[4];
        tempT.setHours(time1);
        tempT.setMinutes(time2);
        setEventSlot({...eventSlot,startTime : new Date(tempT)})
    }
    const handleETime = (newValue)=>{
        let val = newValue.target.value;
        let tempT = new Date(eventSlot.evDate);
        let time1 = val[0] + "" + val[1];
        let time2 = val[3] + "" + val[4];
        tempT.setHours(time1);
        tempT.setMinutes(time2);
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
export default SlotSelection;
