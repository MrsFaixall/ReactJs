import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../context/DarkMode"; // Impor DarkMode dari context yang benar
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const {total} = useTotalPrice();

    useEffect(() => {
        if (cart && cart.length > 0) { // Periksa apakah cart ada dan memiliki item
            const sum = cart.reduce((acc, item) => acc + item.qty, 0);
            setTotalCart(sum);
        } else {
            setTotalCart(0); // Jika cart kosong, set totalCart menjadi 0
        }
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {username}
            <Button className="ml-5 bg-black" onClick={handleLogout}>
                Logout
            </Button>
            <Button
                className="p-2 px-10 m-5 text-white bg-black rounded"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? "Light" : "Dark"}
            </Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                items : {totalCart} | price : {total}
            </div>
        </div>
    );
};

export default Navbar;
