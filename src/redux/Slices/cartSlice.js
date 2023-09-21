import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,actions)=>{
            state.push(actions.payload)
        },
        remove:(state,actions)=>{
            return state.filter((item)=>item.id!==actions.payload)
        },
        clear:(state)=>{
            state.length=0;
        }
    }
})

export const{add,remove,clear} =CartSlice.actions;
export default CartSlice.reducer; 
