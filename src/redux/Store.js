import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";
import { AuthenticationSlice } from "./Slices/authenticationSlice";


export const store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
        login:AuthenticationSlice.reducer
    }
})
