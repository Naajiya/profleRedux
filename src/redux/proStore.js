import { configureStore } from "@reduxjs/toolkit";
import profiles from './profileSlice'
import mailValidation from './emailSlice'


const proStore=configureStore({
    reducer:{
        profileReducer:profiles,
        mailReducer:mailValidation,
    }
})

export default proStore