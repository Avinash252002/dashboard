import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const isSm = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ maxHeight: "100vh", height: "100%", margin: 0 , bgcolor: "#141316" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          bgcolor: "red",
          width: "100%",
        }}
      >
        <Navbar />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {!isSm && (
          <Box
            sx={{
              position: "sticky",
              top: "72px",

              zIndex: 999,
              height: "calc(100vh - 72px)", // Full viewport height minus the header height
              minWidth: "fit-content",
              overflow: "hidden",
            }}
          >
            <Sidebar />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 3,
            px: 2,

            bgcolor: "#141316",
            color: "white",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
      {isSm && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            zIndex: 1000,
            bgcolor: "red",
            width: "100%",
          }}
        >
          <Sidebar />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
