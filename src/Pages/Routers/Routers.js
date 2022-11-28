import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../../Context/PrivateRouter";
import Main from "../../Layout/Main";
import DashboardLayout from "../../Layout/DashboardLayout";
import Payment from "../../Payment/Payment";
import MyBookings from "../BuyNow/Mybookings/MyBookings";
// import BookingsLayout from "../Dashboard/BookingsLayout/BookingsLayout";
import Myproducts from "../Dashboard/MyAddproducts/Myproducts";
import AddProduct from "../Home/AddProduct/AddProduct";
import Blogs from "../Home/Blogs/Blogs";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Login from "../SignIn-SignOut/Login";
import Register from "../SignIn-SignOut/Register";
import AllUser from "../Dashboard/Allusers/Allusers";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: "menus/:id",
                loader: ({ params }) => fetch(`https://resale-masraful.vercel.app/menus/${params.id}`),
                element: <Menu></Menu>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout ></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/addnewservice',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: "/dashboard/myProduct",
                element: <Myproducts></Myproducts>
            },

            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://resale-masraful.vercel.app/bookPayment/${params.id}`),
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/alluser',
                element: <AllUser></AllUser>
            },

        ]
    }


])
export default router;