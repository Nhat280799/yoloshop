import { configureStore } from '@reduxjs/toolkit'
import ProductCartSlice from './reduceProduct/ProductCartSlice'
import CartItemSlice from './reduceCart/CartItemSlice'
export const store = configureStore({
  reducer: {
       productModal : ProductCartSlice,
       listCart : CartItemSlice,
  },
})
export default store