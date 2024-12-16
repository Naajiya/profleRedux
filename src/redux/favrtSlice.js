import { createSlice } from "@reduxjs/toolkit";

const favourites = createSlice({
    name:'favourite',
    initialState:[],
    reducers:{
        addtwofavourite:((state,action)=>{
            state.push(action.payload)
            console.log('clicked')
        })
    }
})

export const {addtwofavourite}=favourites.actions;
export default favourites.reducer;