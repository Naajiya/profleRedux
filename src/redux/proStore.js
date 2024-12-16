import { configureStore } from "@reduxjs/toolkit";
import profiles from './profileSlice'
import mailValidation from './emailSlice'
import favourites from "./favrtSlice";



const proStore=configureStore({
    reducer:{
        profileReducer:profiles,
        mailReducer:mailValidation,
        favrtReducer:favourites,
    }
})

export default proStore