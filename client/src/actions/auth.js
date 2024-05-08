import { AUTH } from '../constants/constant';
import * as api from '../api/index.js';
export const signin = (formData,setUser, router) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signIn(formData);
    if (data.found == 0){
        alert("Invalid Credentials!");
        router("/");
    }
    else{
        setUser({
            emailId : data.emailId,
            auth : 1,
            track : data.password,
            type : data.type
        });
        console.log(data);
        dispatch({ type: AUTH, data });
        router("/"+ data.type +"/" + data.emailId + "/" + data.password);
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    if (data.found === 1){
        alert("User Id already registered. Please login!");
    }
    else{
        alert("User Registered Successfully. Please login!");
    }
    router("/"+ formData.type +"/login");
    
  } catch (error) {
    console.log(error);
  }
};

export const validate = (formData,router) => async (dispatch)=>{
    try{
        const {data} = await api.validate(formData);
    }
    catch (error){
        console.log(error);
    }
};