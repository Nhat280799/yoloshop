import { configureStore } from '@reduxjs/toolkit'
import ProductCartSlice from './reduceProduct/ProductCartSlice'
import CartItemSlice from './reduceCart/CartItemSlice'
import CheckoutSlice from './reduceCheckout/CheckoutSlice'
export const store = configureStore({
  reducer: {
       productModal : ProductCartSlice,
       listCart : CartItemSlice,
       checkoutPage : CheckoutSlice,

  },
})
export default store