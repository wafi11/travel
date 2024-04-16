import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import Navbar from "./components/navbar/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "./components/navbar/Footer.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>
);
