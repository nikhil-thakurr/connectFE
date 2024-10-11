import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name:"requests",
    initialState:null ,
    reducers:{
        addrequests:(state,action)=> action.payload ,
        removeRequest :(state,action)=>{
            const newArr = state.filter(r=>r._id!==action.payload);
            return newArr
        }
    }
})

export const {addrequests,removeRequest} =requestsSlice.actions
export default requestsSlice.reducer