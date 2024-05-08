import React,{useState} from "react";
import { useDispatch } from 'react-redux';
import { signup } from "../../actions/auth";
import { useNavigate } from 'react-router-dom';

function validateCollegeId({cUser}){
    if (cUser.Name == "" || cUser.emailId == "" || cUser.password == "") return false;
    let id =cUser.emailId
    console.log(id);
    let t = id.length;
    if (t <= 12) return false;
    let stInd = t-12; 
    if (id.substr(stInd) != "@iiita.ac.in"){
        return false;
    }
    else{
        return true;
    }
};

function Register(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cUser,setcUser] = useState({
        Name : "",
        emailId : "",
        password : "",
        type : "user",
    });
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("in Submit");
        console.log(cUser);
        //check userId is validated or not;
        if (validateCollegeId({cUser})){
            dispatch(signup(cUser,navigate));
        }
        else{
            alert("Invalid Credentials");
            clear();
        }
        
    }

    const clear = ()=>{
        console.log("inside clear");
        setcUser({
            emailId : "",
            Name : "",
            password : "",
        });
    }
    const handleLogin = ()=>{
        navigate("/user/login");
    }
    return(
        <div>
        <div class="backgroundRegister">
                <div class="shapeRegister"></div>
                <div class="shapeRegister"></div>
            </div>
            <form class="formRegister" >
                <h3 class="heading3Register">Student Register</h3>

                <label class="labelRegister" for="Name">Name</label>
                <input class="inputRegister"  type = "text" placeholder="Name" id = "Name" 
                    required onChange={(e)=> setcUser({...cUser,Name : e.target.value})}
                />
                <label class="labelRegister"  for="userName">Username</label>
                <input class="inputRegister" type="text" placeholder="Email" id="username" 
                    value = {cUser.emailId} required onChange={(e)=> setcUser({...cUser,emailId : e.target.value})}
                />

                <label class="labelRegister"  for="password">Password</label>
                <input class="inputRegister"  type="password" placeholder="Password" id="password" 
                    value = {cUser.password} required onChange={(e)=>setcUser({...cUser,password : e.target.value})}
                />

                <button class="buttonRegister"  onClick={handleSubmit}>Register</button>
                <div class="socialRegister">
                <a class = "aRegister"onClick={handleLogin}>Already Existed! Login</a>
                </div>
            </form>
    </div>
    )
};

export default Register;