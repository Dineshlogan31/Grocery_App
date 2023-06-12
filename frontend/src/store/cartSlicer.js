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
        },
        removecart(state,action){
            
           const index= state.findIndex((cart)=>cart.product.id === action.payload.product.id)
           state.shift(state[index])
        }
    }
})

export const {addToCart,removecart}=cartSlice.actions

export default cartSlice.reducer
