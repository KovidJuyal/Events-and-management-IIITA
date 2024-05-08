import { Paper,List } from "@mui/material";
import React, { useEffect } from "react";
import Question from "./Question";
import { useState } from "react";
import { useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbarr from "../Navbarr/Navbarr";
import { fetchBooking, fetchContacts, getBookings } from "../../actions/bookings";

function PastContact({user,setUser}){
    const {emailId,track} = useParams();
    const navigate = useNavigate();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        console.log("in");
        navigate("/user/login");
    };
    const [data,setData] = useState([]);
    useEffect(()=>{
        console.log("called");
        fetchContacts()
            .then(data => setData(data.filter((entry=>{
                return (entry.user_id == user.emailId);
            }))));
    },[]);

    return(
        <div class = "backgroundDisclaimer">
            <div class="marginDisclaimer"></div>
            <Navbarr user = {user} setUser={setUser}/>

            <List >
            {data.map((entry)=>{
                return <Question key = {entry.ques_id} event = {entry}/>
            })}
                <Question/>
            </List>
        </div>
    )
}

export default PastContact;