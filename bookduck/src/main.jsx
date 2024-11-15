import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/reset.css";
import SuspenseLoading from "./components/common/SuspenseLoading.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/reactQuery/queryClient.js";
createRoot(document.getElementById("root")).render(

  <React.Suspense fallback={<SuspenseLoading />}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.Suspense>

);
