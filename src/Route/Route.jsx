import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/donation',
            element: <h1>donaiton</h1>
         },
         {
            path: '/statistics',
            element: <h1>Statistics</h1>
         }
      ]
   }
])

export default Route;