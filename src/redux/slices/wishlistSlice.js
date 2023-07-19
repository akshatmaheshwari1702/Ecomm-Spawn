import { createSlice } from '@reduxjs/toolkit'

const initialState = {    
    wishlistItems: [],
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.wishlistItems.find(
            (item) => item.id === newItem.id
        );

        if(!existingItem){
            state.wishlistItems.push({
                id: newItem.id,
                productName: newItem.productName,
                imgUrl: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
        }
    },
    removeItem: (state, action) => {
        const id = action.payload;
        state.wishlistItems = state.wishlistItems.filter((item) => item.id !== id);
      },
  }, 
});

export const wishlistActions = wishlistSlice.actions

export default wishlistSlice.reducer