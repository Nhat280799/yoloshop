import { createSlice } from '@reduxjs/toolkit'


const items = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];

const initialState = {
  value: items,
}

export const CartItemSlice = createSlice({
  name: 'listCart',
  initialState,
  reducers: {
    addItem: (state,payload) => {
       const newItem = payload.payload;
       const duplicate = state.value.filter((e) => e.color === newItem.color && e.size === newItem.size && e.slug === newItem.slug);
       if(duplicate.length > 0){
        state.value = state.value.filter((e) => e.color !== newItem.color || e.size !== newItem.size || e.slug !== newItem.slug);
        state.value = [
            ...state.value,
            {
                id : duplicate[0].id,
                color : newItem.color,
                size : newItem.size,
                slug : newItem.slug,
                price : newItem.price,
                quantity : newItem.quantity + duplicate.quantity,
            }
        ]
       }else{
        state.value = [
            {
                ...newItem,
                id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
            }
        ]
       }
       localStorage.setItem("cart", JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem } = CartItemSlice.actions

export default CartItemSlice.reducer