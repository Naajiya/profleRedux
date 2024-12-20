import { createSlice } from "@reduxjs/toolkit";

const progslice = createSlice({
    name:"progress",
    initialState:{progress:0},
    reducers:{
        storeProgress:((state,action)=>{
            state.progress = action.payload
        })
    }
})

export const {storeProgress}=progslice.actions
export default progslice.reducer