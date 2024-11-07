import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { client } from "./Config/QueryClient.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
  >
    <QueryClientProvider client={client}>
      <App />
      <CssBaseline />
      <ReactQueryDevtools />
      <ToastContainer />
    </QueryClientProvider>
  </BrowserRouter>
);
