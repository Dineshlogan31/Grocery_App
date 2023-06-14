import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const getAllCartItems=createAsyncThunk(
    "product/getAllCartItems",
    async ()=>{
        const response=await fetch("http://localhost:5000/getAllCartItems")
        if(response.ok)
        {
            const cartItems=await response.json()
            console.log(cartItems);
            return cartItems
        }

    }
)

export const removeFromCart=createAsyncThunk(
    "cart/removeFromCart",
    async (payload)=>{
        console.log(payload._id);
        const response=await fetch(`http://localhost:5000/removeFromCart/${payload._id}`,{
            method:"DELETE"
        })
        if(response.ok)
        {
            const cartItems=await response.json()
            return cartItems
        }
    }
)


export const addToCartAsync=createAsyncThunk(
    "product/addToCart",
    async (payload)=>{
       const response=await fetch("http://localhost:5000/addToCart",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(payload.product)
       })
       if(response.ok)
       {
        const cartItem=await response.json()
        return cartItem
       }
    }
)


export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
           state && state.push(action.payload)
        },
        removecart(state,action){
           const index= state.findIndex((cart)=>cart.product.id === action.payload.product.id)
           state.shift(state[index])
        }
    },
    extraReducers:{
        [getAllCartItems.fulfilled]:(state,action)=>{
           console.log(action.payload);
            return action.payload
        },
        [addToCartAsync.fulfilled]:(state,action)=>{
            state.push(action.payload)
        },
        [removeFromCart.fulfilled]:(state,action)=>{
           return state.filter((cart)=>cart._id !== action.payload._id)
        }
    }
})

export const {addToCart,removecart}=cartSlice.actions

export default cartSlice.reducer
