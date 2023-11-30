import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import CreateAccountPage from "../pages/CreateAccountPage";
<<<<<<< Updated upstream
import ArtistPage from "../pages/ArtistPage";
=======
import ConnectWalletPage from "../pages/ConnectWalletPage";
>>>>>>> Stashed changes

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/createAccount",
        element: <CreateAccountPage />,
      },
      {
<<<<<<< Updated upstream
        // path: "/artist/:user",
        path: "/artist",
        element: <ArtistPage />,
=======
        path: "/connectWallet",
        element: <ConnectWalletPage />,
>>>>>>> Stashed changes
      },
    ],
  },
]);
