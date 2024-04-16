// import React, { Suspense, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./components/Category/Category";
import ProductsId from "./components/product/ProductsId";
import Blog from "./components/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  { path: `/search`, element: <Category /> },
  { path: `/product/:id`, element: <ProductsId /> },
]);
