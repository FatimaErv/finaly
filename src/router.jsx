import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Guarantee from "./pages/Guarantee"
import Payment from "./pages/Payment"
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import Register from './pages/Register'
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ChekOut from "./pages/ChekOut";
import DetailProduct from "./pages/DetailProduct";

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
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"check-out",
                element:<ChekOut/>
            },
            {
                path:"detail-product",
                element:<DetailProduct/>
            }
        ],
    }
    ]  
)
 