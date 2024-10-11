import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:"connection",
    initialState:null,
    reducers : {
        addConnection :(state,action) =>action.payload,
        removeConnections :()=>null,
    }
})

export const {addConnection,removeConnections} =connectionSlice.actions;
export default connectionSlice.reducer 