import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Marc from "./Marc";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Directori from "./Directori";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Marc",
        Component: Marc,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/directori",
        Component: Directori,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "*",
        Component: Home,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
