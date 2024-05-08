import {configureStore} from "@reduxjs/toolkit";
import bookingsSlice from "../features/booking/bookingSlice";
export default configureStore({
    reducer : {
        bookings : bookingsSlice
    }
})