import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../actions/auth";

function LoginUser({user,setUser}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cUser,setcUser] = useState({
        emailId : "",
        password : "",
        type : "user"
    });

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(signin(cUser,setUser,navigate));

        //check userId is validated or not;
    }
    const clear = ()=>{
        setcUser({
            emailId : "",
            password : "",
        });
    }
    const handleSignup = ()=>{
        navigate("/user/register");
    }
    return(
        <div>
        <div class="backgroundLogin">
                <div class="shapeLogin"></div>
                <div class="shapeLogin"></div>
            </div>
            <form class = "formLogin" >
                <h3 class = "heading3Login">Student Login</h3>

                <label class = "labelLogin" for="username">Username</label>
                <input class = "inputLogin" type="text" placeholder="Email" id="username" 
                    value = {cUser.emailId} required onChange={(e)=> setcUser({...cUser,emailId : e.target.value})}
                />

                <label class = "labelLogin" for="password">Password</label>
                <input class = "inputLogin" type="password" placeholder="Password" id="password" 
                    value = {cUser.password} required onChange={(e)=>setcUser({...cUser,password : e.target.value})}
                />

                <button class = "buttonLogin"onClick={handleSubmit}>Log In</button>
                <div class="socialLogin">
               
                <a class = "aLogin" onClick={handleSignup}>New User! SignUp</a>
                </div>
            </form>
    </div>
    )
};

export default LoginUser;