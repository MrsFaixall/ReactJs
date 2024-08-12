import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Action
const addToCart = createAction("ADD_TO_CART");

// Reducer
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});


const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    })
});

// Store
const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    }
});

console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
});

// Dispatch
store.dispatch(addToCart({ id: 1, qty: 2 }));
store.dispatch(addToCart({ id: 25, qty: 50 }));
store.dispatch(login());