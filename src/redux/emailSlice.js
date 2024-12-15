import { createSlice } from "@reduxjs/toolkit";

const mailValidation = createSlice({
    name:'email',
    initialState:{
        email:'',
        isValid:false
    },
    reducers:{
        emailVerification:((state,action)=>{
            const mail=action.payload;
            if((mail.slice(-10)=='@gmail.com')){
                console.log('true')
                state.isValid=true
                state.email=mail;
            }else{
                console.log('false')
                state.isValid=false
            }
        })
    }
})


export const {emailVerification} = mailValidation.actions;
export default mailValidation.reducer;