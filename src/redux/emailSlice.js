import { createSlice } from "@reduxjs/toolkit";

const mailValidation = createSlice({
    name:'email',
    initialState:{
        email:'',
        isValid:''
    },
    reducers:{
        emailVerification:((state,action)=>{
            const mail=action.payload;
            if((mail.slice(-10)=='@gmail.com')){
                console.log('true')
                state.isValid=true
            }else{
                console.log('false')
                state.isValid=false
            }
        })
    }
})


export const {emailVerification} = mailValidation.actions;
export default mailValidation.reducer;