import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [], 
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    },
});

//store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
});

console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 20}));