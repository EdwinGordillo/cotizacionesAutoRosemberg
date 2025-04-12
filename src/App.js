import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Facturacion from "./pages/Facturacion";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <SidebarLayout />
        <div style={{ flexGrow: 1, padding: "40px", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route path="/facturacion" element={<Facturacion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;