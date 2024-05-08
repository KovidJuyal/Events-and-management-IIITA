import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user : {}
}

export const authsSlice = createSlice({
    name : "User",
    initialState,
    reducers : {
        addUser : (state,action)=>{
            // console.log(action.payload);
            state.user = (action.payload);
        }
    }
});
export const {addUser} = authsSlice.actions; 
export default authsSlice.reducer;