import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./Layout/Layout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Campaign from "./Pages/Campaign/Campaign";
import Donations from "./Pages/Donation/Donations";
import Statistics from "./Pages/Statistics/Statistics";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch(`https://ashrafulrifaz.github.io/donation-campaign-data/data.json`)
      },
      {
          path: '/campaign/:id',
          element: <Campaign></Campaign>,
          loader: () => fetch(`https://ashrafulrifaz.github.io/donation-campaign-data/data.json`)
      },
      {
          path: '/donation',
          element: <Donations></Donations>,
          loader: () => fetch('https://ashrafulrifaz.github.io/donation-campaign-data/data.json')
      },
      {
          path: '/statistics',
          element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)