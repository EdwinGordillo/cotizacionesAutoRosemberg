import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Facturacion from "./pages/Facturacion";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const drawerWidth = 240;
  const open = sidebarOpen;

  return (
    <Router>
      {/* Este contenedor general ya no debe tener height: 100vh ni overflow */}
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarLayout open={sidebarOpen} setOpen={setSidebarOpen} />
        
        {/* Este es el único contenedor que debe manejar el scroll */}
        <div
          style={{
            flexGrow: 1,
            minHeight: "100vh", // asegura el 100% de alto
            overflowY: "auto", // solo scroll vertical
            padding: "40px",
            boxSizing: "border-box",
            transition: "margin 0.3s ease",
            marginLeft: open ? `${drawerWidth}px` : 0,
          }}
        >
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