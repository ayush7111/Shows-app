import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DetailContextProvider } from "./context/DetailContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DetailContextProvider>
        <App />
      </DetailContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
