import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box sx={{ maxHeight: "100vh", height: "100%", margin: 0 }}>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
        <Navbar />
      </Box>
<Box sx={{ display: "flex" , flexDirection : "row" }}>
      <Box
        sx={{
          position: "sticky",
          top: "72px", // Adjust to match the height of the header or navbar
          left: 0,
          zIndex: 999,
          height: "calc(100vh - 72px)", // Full viewport height minus the header height
          minWidth : "fit-content",
          overflow: "hidden",
        }}
      >
        <Sidebar />
      </Box>
      <Box sx={{ display: "flex" , flexDirection : "column" , py : 3, px : 2, bgcolor : "#141316" , color : "white" , width : "100%" }}>{children}</Box>

      </Box>

    </Box>
  );
};

export default Layout;
