import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layouts/RootLayout";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import Favorite from "../pages/Favorite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/recipes",
            element: <Recipe />,
          },
          {
            path: "/favorites",
            element: <Favorite />,
          },
        ],
      },
    ],
  },
]);
