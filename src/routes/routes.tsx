import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "@/components/ShareComponents/Products";
import Login from "@/pages/User/Login";
import Register from "@/pages/User/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/stripe-pay",
      //   element: <StripePay />,
      // },
    ],
  },
]);
