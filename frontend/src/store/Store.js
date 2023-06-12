import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./productSlicer"
import cartReducer from "./cartSlicer"

export default configureStore({
    reducer:{
      product:productReducer,
      cart:cartReducer
    }
})