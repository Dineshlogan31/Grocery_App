import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const getAllProducts=createAsyncThunk(
    "/api/getAllProducts",
    async ()=>{
       const response= await fetch("https://fakestoreapi.com/products")
       if(response.ok)
       {
        const products=await response.json()
        return {products}
       }
    }
)



export const productSlice=createSlice({
    name:"products",
    initialState:{
        
    },
    reducers:{
        
          },
          extraReducers:{
            [getAllProducts.fulfilled]:(state,action)=>{
                return action.payload.products
            }
        }    
    })



export default productSlice.reducer
