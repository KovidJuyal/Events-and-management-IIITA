import { Paper,List } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbarr from "../Navbarr/Navbarr";
import { requestContacts } from "../../actions/bookings";

function Contact({user,setUser}){
    const {emailId,track} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        console.log("in");
        navigate("/user/login");
    };

    const [ques,setQues] = useState({
        question : "",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        const quesBook = {...ques,...user};
        dispatch(requestContacts(quesBook,navigate));
        alert("Your question will be answered ASAP")
    }
    const handleSubmitPast = (e)=>{
        e.preventDefault();
        const url = "/user/" + user.emailId + "/" + user.track + "/pastContact";
        navigate(url);
    }
    
    const clear = ()=>{
        console.log("Called");
        setQues({...ques,question : " "});
    }

    return(
        <div class = "backgroundDisclaimer">
            <div class="marginDisclaimer"></div>
            <Navbarr user = {user} setUser={setUser}/>
            
            <form class = "formContact" >
                <h3 class = "heading3Contact">Ask Questions Here</h3>

                <label class = "labelContact" for="ques">Type your Question</label>
                <textArea rows = "5" class = "textAreaContact" type="text" required placeholder="Please clarify your issue along with details of event for faster response" id="ques" 
                    onChange={(e)=> setQues({...ques,question : e.target.value})}
                />

                <button class = "button1Contact" onClick = {handleSubmit}>Send</button>
                <button class = "button2Contact" onClick = {handleSubmitPast}>Past Questions</button>
            </form>
            
        </div>
    )
}

export default Contact;