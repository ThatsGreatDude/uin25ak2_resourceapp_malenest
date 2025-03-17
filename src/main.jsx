import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Endret slik at router kun er her, og ikke i app.jsx som på github https://github.com/toremake/uin2025_coursebase/blob/main/Zelda_api/src/main.jsx
import "./styles/styles.sass"; 
import App from "./App.jsx"; 

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
