
import { Link } from "react-router-dom";
import { useContext } from "react"; // Pastikan useContext diimpor
import { DarkMode } from "../../context/DarkMode"; // Impor DarkMode dari konteks yang benar


const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
{

  console.log(isDarkMode); 
}
  return (
    <div className={`flex justify-center items-center min-h-screen bg-gray-100 
    ${isDarkMode && "bg-slate-900"}`}
    >
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <button
        className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" 
        onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"} 
        </button>
        <h1 className="text-3xl font-bold mb-4 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome, please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "Login" ? "Don't have an account? " : "Already have an account? "}
          {type === "Login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "Register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
