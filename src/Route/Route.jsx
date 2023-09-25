import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Campaign from "../Pages/Campaign/Campaign";
import Donations from "../Pages/Donation/Donations";
import PureComponent from "../Pages/Statistics/Statistics";

const Route = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`data.json`)
         },
         {
            path: '/campaign/:id',
            element: <Campaign></Campaign>,
            loader: () => fetch(`data.json`)
         },
         {
            path: '/donation',
            element: <Donations></Donations>,
            loader: () => fetch('data.json')
         },
         {
            path: '/statistics',
            element: <PureComponent></PureComponent>
         }
      ]
   }
])

export default Route;