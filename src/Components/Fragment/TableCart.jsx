import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPriceDispatch, useTotalPrice } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode } = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch();
    const {total} = useTotalPrice();
    
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            // Panggil dispatch sebagai fungsi
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum,
                },
            });
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products, dispatch]); // Tambahkan dispatch ke daftar dependensi

    const totalPriceRef = useRef(null);
    
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);
    
    return(
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 && 
           cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0,10)}...</td>
                <td>
                  ${""}
                  {product.price.toLocaleString('id-iD', {
                    styles: 'currency',
                    currency: "usd"
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  ${""}
                  {(item.qty * product.price).toLocaleString('id-iD', {
                    styles: 'currency',
                    currency: "usd"
                  })}</td>
              </tr>
            )
          })}
          <tr ref={totalPriceRef}>
            <td colSpan={3}><b>Total Price</b></td>
            <td>
              <b>${""}
                {total.toLocaleString('id-iD', {
                  styles: 'currency',
                  currency: "usd"
                })}</b>
            </td>
          </tr>
        </tbody>
      </table>
    )
}

export default TableCart;