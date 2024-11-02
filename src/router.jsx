import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Guarantee from "./pages/Guarantee"
import Payment from "./pages/Payment"
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import Wishlist from "./pages/Wishlist";
import Register from './pages/Register'
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ChekOut from "./pages/ChekOut";
import Pay from "./pages/Pay";

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
                path:"detailProduct/:id",
                element:<DetailProduct/>
            },
            {
                path:"Wishlist",
                element:<Wishlist/>
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
                path:"pay",
                element:<Pay/>
            }
        
        ],
    }
    ]  
)
 