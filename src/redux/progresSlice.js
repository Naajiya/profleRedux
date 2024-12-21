import { createSlice } from "@reduxjs/toolkit";

const progslice = createSlice({
    name:"progress",
    initialState:{progressone:0, progresstwo:0},
    reducers:{
        storeProgress:((state,action)=>{
            state.progressone = action.payload
            localStorage.setItem("progressone",action.payload)
        }),
        storeProgressTwo:((state,action)=>{
            state.progresstwo= action.payload
            localStorage.setItem("progresstwo",action.payload)
        })
    }
})

export const {storeProgress,storeProgressTwo}=progslice.actions
export default progslice.reducer