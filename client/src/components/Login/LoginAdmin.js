import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../actions/auth";

function LoginAdmin({user,setUser}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cUser,setcUser] = useState({
        emailId : "",
        password : "",
        type : "admin"
    });

    const handleSubmit = (event)=>{
        event.preventDefault();
        setUser({...user,})
        dispatch(signin(cUser,setUser,navigate));

        //check userId is validated or not;
    }
    const clear = ()=>{
        setcUser({
            emailId : "",
            password : "",
        });
    }

    return(
        <div>
            <div class="backgroundLogin">
                <div class="shapeLogin"></div>
                <div class="shapeLogin"></div>
            </div>
            <form class = "formLogin" >
                <h3 class = "heading3Login">Admin Login</h3>

                <label class = "labelLogin" for="username">Username</label>
                <input class = "inputLogin" type="text" placeholder="Email" id="username" 
                    value = {cUser.emailId} required onChange={(e)=> setcUser({...cUser,emailId : e.target.value})}
                />

                <label class = "labelLogin" for="password">Password</label>
                <input class = "inputLogin" type="password" placeholder="Password" id="password" 
                    value = {cUser.password} required onChange={(e)=>setcUser({...cUser,password : e.target.value})}
                />

                <button class = "buttonLogin"onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )
};

export default LoginAdmin;