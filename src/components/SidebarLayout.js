import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function SidebarLayout({ open, setOpen }) {
  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Cotización", path: "/cotizacion" },
    { label: "Facturación", path: "/facturacion" },
  ];

  return (
    <>
      {/* Botón para abrir el menú */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1301,
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: 2,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary" // <- cambia a temporal
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f8f9fa",
            padding: "20px",
          },
        }}
        ModalProps={{
          keepMounted: true, // Mejora performance en móvil
        }}
      >
        <Typography variant="h5" sx={{ mb: 4 }}>
          AutoRosemberg
        </Typography>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)} // cerrar al navegar
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&.active": {
                    backgroundColor: "#007bff",
                    color: "white",
                    "& .MuiListItemText-primary": {
                      fontWeight: "bold",
                    },
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SidebarLayout;
