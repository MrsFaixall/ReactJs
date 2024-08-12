import { createSlice } from '@reduxjs/toolkit';

// Penamaan variabel berbeda dari 'createSlice'
const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        data: JSON.parse(localStorage.getItem("cart")) || [], 
    }, // Struktur state yang benar
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload); // Tambahkan item ke 'data'
            }
        },
    },
});

// Ekspor action dan reducer
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
