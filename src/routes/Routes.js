import Login from "../components/Login/Login";
import Charts from "../components/charts/Charts";
import Home from "../components/home/Home";
import Notfound from "../components/other/Notfound";
import Setting from "../components/other/Setting";
import Product from "../components/products/Product";
import Profile from "../components/profile/Profile";
import Users from "../components/users/Users";

let AllRoutes = [
    {path:"/" , element:<Home/>},
    {path:"/users" , element:<Users/>},
    {path:"*" , element:<Notfound/>},
    {path:"/charts" , element:<Charts/>},
    {path:"/products" , element:<Product/>},
    {path:"/profile" , element:<Profile/>},
    {path:"/login" , element:<Login/>},
    {path:"/setting" , element:<Setting/>},
]

export default AllRoutes