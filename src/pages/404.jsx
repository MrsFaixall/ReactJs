import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
            <h1 className="text-3xl font-bold">Opp!!</h1>
            <p className="my-5 text-xl">Sory, an unexpected error has occured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;