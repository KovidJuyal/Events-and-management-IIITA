import React from "react";
import useStyles from "./styles";
import {useNavigate} from "react-router-dom";

import "../Home/styles.css";

function Home({user}){
    const classes = useStyles();
    const navigate = useNavigate();
    function handleSubmitLogin(){
        navigate("/user/login");
    }
    function handleSubmitAdmin(){
        navigate("/admin/login");
    }
    return(
        <div>
        <div class="welcomeHome">
            <h1 class = "heading1Home">
                Elite 
            </h1>
            <h2 class = "heading2Home">
            Welcome to stress-free events! We take care of the details, so you can focus on making memories. Browse our inspiration gallery or tell us about your dream event.
            </h2>
                <button class="button1Home"  onClick={handleSubmitLogin}>Student</button>
                <button class="button2Home" onClick={handleSubmitAdmin}>Admin</button>
        </div>
        <div id = "imageHome" class="blurImageHome"></div>
        </div>
    )
};

export default Home;