import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Facturacion from "./pages/Facturacion";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // <- controla el sidebar
  const drawerWidth = 240;
  const open = sidebarOpen; // <- controla el sidebar
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <SidebarLayout open={sidebarOpen} setOpen={setSidebarOpen} />
        <div
          style={{
            flexGrow: 1,
            padding: "40px",
            marginLeft: open ? `${drawerWidth}px` : 0,
            transition: "margin 0.3s ease",
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