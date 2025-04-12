import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

function SidebarLayout() {
  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Cotización", path: "/cotizacion" },
    { label: "Facturación", path: "/facturacion" },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f8f9fa",
          padding: "20px",
        },
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
  );
}

export default SidebarLayout;
