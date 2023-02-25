import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewLayoutMain from "./components/newList/NewLayoutMain";
import MainLayoutOld from "./MainLayoutOld";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayoutOld />
    },
    {
        path: '/new',
        element: <NewLayoutMain />
    }
]);

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
