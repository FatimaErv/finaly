import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"

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
                path:"about",
                element:<About/>
            }]
        }
    ]
)
export default myRouter
 