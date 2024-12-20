import { configureStore } from "@reduxjs/toolkit";
import profiles from './profileSlice'
import mailValidation from './emailSlice'
import favourites from "./favrtSlice";
import progslice from "./progresSlice"



const proStore=configureStore({
    reducer:{
        profileReducer:profiles,
        mailReducer:mailValidation,
        favrtReducer:favourites,
        progresReducer:progslice
    }
})

export default proStore