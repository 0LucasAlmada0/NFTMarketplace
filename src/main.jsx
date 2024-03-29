import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { app } from "./services/firebaseConfig";

import { UserProvider } from "./context/UserContext";

// app()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
