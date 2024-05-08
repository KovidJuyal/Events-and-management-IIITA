import { Paper,List } from "@mui/material";
import React, { useEffect } from "react";
import Question from "./Question";
import { useState } from "react";
import { useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBooking, fetchContacts, getBookings } from "../../actions/bookings";
import AdminNavbar from "../AdminNavbarr/AdminNavbarr";

function AdminContact({user,setUser}){
    const {emailId,track} = useParams();
    const navigate = useNavigate();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        navigate("/user/login");
    };
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetchContacts()
            .then(data => setData(data.filter((entry=>{
                return true;
            }))));
    },[]);
    
    return(
        <div class = "backgroundDisclaimer">
            <div class="marginDisclaimer"></div>
            <AdminNavbar user = {user} setUser={setUser}/>

            <List >
            {data.map((entry)=>{
                return <Question user = {user} setUser = {setUser} key = {entry.ques_id} event = {entry}/>
            })}
                <Question/>
            </List>
        </div>
    )
}

export default AdminContact;