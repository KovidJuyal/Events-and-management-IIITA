import axios from "axios";
const url = "http://localhost:5000";
const API = axios.create({baseURL : 'http://localhost:5000'});

export const fetchBooking = ()=>axios.get(`${url}/booking`);
export const fetchStatus = (eventSlot)=> axios.get(`${url}/booking/building/${eventSlot.building_id}/status/${eventSlot.currStatus}/date/${eventSlot.evDate}`);

export const fetchBookingToday = (date)=>axios.get(`${url}/${date}`);
export const requestBooking = (newBooking)=> axios.post(`${url}/booking`,newBooking);
export const updateBooking = (booking)=> axios.post(`${url}/booking/update`,booking);

export const requestContacts = (newContact)=> axios.post(`${url}/booking/contacts`,newContact);
export const fetchContacts = ()=> axios.get(`${url}/booking/contacts`);
export const updateAnswer = (newContact)=> axios.post(`${url}/booking/contacts/update`,newContact);

export const signUp = (formData) => axios.post(`${url}/auth/user/register`,formData);
export const signIn = (formData) => axios.post(`${url}/auth/user/login`,formData);
export const validate = (formData) => axios.post(`${url}/auth/user/validate`,formData);