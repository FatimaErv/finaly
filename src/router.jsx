import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Guarantee from "./pages/Guarantee"
import Payment from "./pages/Payment"
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                 path:"guarantee",
                 element:<Guarantee/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"delivery",
                element:<Delivery/>
            },
            {
                path:"payment",
                element:<Payment/>
            },
            {
                path:"contact",
                element:<Contact/>
            }
        ],
    }
    ]  
)
 