import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const getAllProducts=createAsyncThunk(
    "/api/getAllProducts",
    async ()=>{
       const response= await fetch("http://localhost:5000/getAllProducts")
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
