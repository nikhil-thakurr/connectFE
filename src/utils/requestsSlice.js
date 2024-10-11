import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name:"requests",
    initialState:null ,
    reducers:{
        addrequests:(state,action)=> action.payload 
    }
})

export const {addrequests} =requestsSlice.actions
export default requestsSlice.reducer