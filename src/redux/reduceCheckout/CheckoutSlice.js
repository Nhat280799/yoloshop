import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const CheckoutSlice = createSlice({
  name: 'checkoutPage',
  initialState,
  reducers: {
    addUser: (state,payload) => {
        state.value = payload.payload;
    }
  },
})


export const { addUser } = CheckoutSlice.actions

export default CheckoutSlice.reducer 