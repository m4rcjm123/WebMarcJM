import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Marc from './Marc';
import { Navbar } from './navbar'

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/Marc",
    Component: Marc,
  },
  {
    path: "*",
    Component: App,
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

