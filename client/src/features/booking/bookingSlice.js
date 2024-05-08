import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    bookings : []
}

export const bookingsSlice= createSlice({
    name : "booking",
    initialState,
    reducers : {
        addBooking : (state,action)=>{
            // console.log(action.payload);
            state.bookings.push(action.payload);
        }
    }
});
export const {addBooking} = bookingsSlice.actions; 
export default bookingsSlice.reducer;