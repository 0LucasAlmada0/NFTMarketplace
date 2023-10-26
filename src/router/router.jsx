import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import CreateAccountPage from "../pages/CreateAccountPage";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <HomePage/>
      },
      {
        path:'/createAccount',
        element: <CreateAccountPage/>
      },
    ]
  },
  
])

