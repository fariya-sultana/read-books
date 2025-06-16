import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Error from "../Pages/Error";
import AllBooks from "../Pages/AllBooks";
import PrivateProvider from "../Contexts/PrivateProvider";
import AddBook from "../Pages/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import CategoryBooks from "../Pages/CategoryBooks";



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "allBooks",
                element: <PrivateProvider><AllBooks></AllBooks></PrivateProvider>
            },
            {
                path: "addBook",
                element: <PrivateProvider><AddBook></AddBook></PrivateProvider>
            },
            {
                path: "borrowedBooks",
                element: <PrivateProvider><BorrowedBooks></BorrowedBooks></PrivateProvider>
            },
            {
                path: "/category/:name",
                Component: CategoryBooks
            }

        ]
    },
    {
        path: "",
        Component: AuthLayout,
        errorElement: <Error />,
        children: [
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
]);

export default router;
