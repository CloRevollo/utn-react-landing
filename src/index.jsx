import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//Estilos
import "./style/normalize.css";
import "./style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);