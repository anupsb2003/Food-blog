import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DosaNavigation from "./pages/DosaNavigation/DosaNavigation";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SpicesNavigation from "./pages/SpicesNavigation/SpicesNavigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dosa-navigation" element={<DosaNavigation />} />
        <Route path="/spices-navigation" element={<SpicesNavigation />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);