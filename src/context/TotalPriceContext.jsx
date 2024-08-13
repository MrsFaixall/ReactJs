import { createContext, useContext, useReducer } from "react";

// Membuat context untuk total price
const TotalPriceContext = createContext(null);
const TotalPriceDispatchContext = createContext(null);

// Reducer untuk mengelola total price
const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                total: action.payload.total,
            };
        default:
            throw new Error("Unknown action: " + action.type);
    }
};

// Provider untuk total price
export function TotalPriceProvider({ children }) {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
    
    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    );
}

// Hook untuk menggunakan total price
export function useTotalPrice() {
    return useContext(TotalPriceContext);
}

// Hook untuk menggunakan dispatch total price
export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispatchContext);
}
