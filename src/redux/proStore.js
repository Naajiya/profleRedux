import { configureStore } from "@reduxjs/toolkit";
import profiles from './profileSlice'

const proStore=configureStore({
    reducer:{
        profileReducer:profiles
    }
})

export default proStore