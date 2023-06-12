import {createSlice} from "@reduxjs/toolkit"


export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
            // const cart={
            //     id:action.payload.id,
            //     title:action.payload.title,
            //     price:action.payload.price
            // }
            
            state.push(action.payload)
        }
    }
})

export const {addToCart}=cartSlice.actions

export default cartSlice.reducer
