import * as api from "../api";
export const getBookings = ()=>async()=>{
    try {
        const {data} = await api.fetchBooking();
    } catch (error) {
        console.log(error.message);
    }
}
export const fetchContacts = async()=>{
    try{
        const res = await api.fetchContacts();
        const data = res.data;
        return data;
    }
    catch(error){
        console.error(error);
    }
}

export const fetchBooking = async ()=>{
    try{
        const res = await api.fetchBooking();
        const data = await res.data;
        return data;
    }
    catch(e){
        console.error(e);
    }
}

export const fetchStatus = async (eventSlot)=>{
    try{    
        const res = await api.fetchStatus(eventSlot);
        const data = await res.data;
        return data;
    }
    catch(e){
        console.error();
    }
}

export const requestContacts = (formData,router)=>async(dispatch)=>{
    try{
        const {data} = await api.requestContacts(formData);
        const url = "/user/" + formData.emailId + "/" +formData.track + "/pastContact";
        router(url);
    }
    catch(e){
        console.error(e);
    }
}

export const requestBooking = (formData,router)=>async(dispatch)=>{
    try{
        const {data} = await api.requestBooking(formData);
        // dispatch(addBooking(data));
        const url = "/user/" + formData.emailId + "/" +formData.track;
        router(url);
    }
    catch(error){
        console.log(error);
    }
}

export const updateAnswer = (formData,router) => async(dispatch)=>{
    try{
        const {data} = await api.updateAnswer(formData);
        alert("Answer sent! ");
        const url = "/admin/" + formData.emailId + "/" +formData.track;
        router(url);

    }
    catch(error){
        console.error(error);
    }
}

export const updateBooking = (formData,router) => async(dispatch)=>{
    try{
        const {data} = await api.updateBooking(formData);
        alert("update Successfully! ");
        const url = "/admin/" + formData.emailId + "/" +formData.track + "/status";
        router(url);
    }
    catch(error){
        console.error(error);
    }
}

