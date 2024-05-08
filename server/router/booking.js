import express from "express";
import { getBookings,getContacts,requestBooking, requestContacts, updateBooking, updateContact } from "../controllers/booking.js";
const router = express.Router();

router.get("/",getBookings);
router.get("/contacts",getContacts);
router.post("/",requestBooking);
router.post("/update",updateBooking);
router.post("/contacts",requestContacts);
router.post("/contacts/update",updateContact);
export default router;