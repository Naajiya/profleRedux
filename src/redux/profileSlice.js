import { createSlice } from "@reduxjs/toolkit";

const profiles=createSlice({
    name:'profile',
    initialState:{
        profiles:[],
        logins:[]
    },
    reducers:{
        addNewProfile:((state,action)=>{
            state.profiles.push(action.payload)
        }),
        addToLogin:((state,action)=>{
            state.logins.push((action.payload))
        })
    }
})

export const {addNewProfile,addToLogin}=profiles.actions
export default profiles.reducer
