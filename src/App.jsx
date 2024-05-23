import React from "react";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import {
    Link,
    NavLink,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Analytics from "./pages/Analytics";
import Redirect from "./pages/Redirect";
import { Toaster } from "react-hot-toast";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <div>About</div>,
        },
        {
            path: "/tools",
            element: <div>Tools</div>,
        },
        {
            path: "/analytics/:id",
            element: <Analytics />,
        },{
            path: "/link/:id",
            element: <Redirect/>,
        }
    ]);
    return (
        <div className="w-full max-w-[100%] overflow-x-hidden h-full min-h-screen bg-[#ff9a00]">
            <Toaster/>
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
