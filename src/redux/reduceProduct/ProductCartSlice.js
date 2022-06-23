import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const ProductCartSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    set: (state,payload) => {
        state.value = payload.payload
    },
    remove: (state,payload) => {
        state.value = null
    },
  },
})


export const { set, remove } = ProductCartSlice.actions

export default ProductCartSlice.reducer 