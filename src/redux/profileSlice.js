import { createSlice } from "@reduxjs/toolkit";

const profiles=createSlice({
    name:'profile',
    initialState:[],
    reducers:{
        addNewProfile:((state,action)=>{
            state.push(action.payload)
        }),
    }
})

export const {addNewProfile}=profiles.actions
export default profiles.reducer
