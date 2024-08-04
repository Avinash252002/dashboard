
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import React from "react";

const AnalyticsGraph = () => {
  const [value, setValue] = React.useState<number>(10);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={"62.7%"}
      bgcolor={"#1f2029"}
      p={2}
      borderRadius={"8px"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        justifyContent={"space-between"}
      >
        <h3 style={{ fontWeight: "500" }}>Activity</h3>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <Select
            size="small"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            sx={{
              height: "30px",
              width: "100px",

              fontSize: "12px",
              fontFamily: "poppins",
              borderRadius: "20px", // Rounded borders
              backgroundColor: "#43464b", // Background color red
              color: "#fff", // Text color white
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Make border color transparent
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Keep border color transparent on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Keep border color transparent on focus
              },
              "& .MuiSelect-icon": {
                color: "#fff", // Icon color white
              },
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
            }}
          >
            <MenuItem
              value={10}
              sx={{ fontSize: "12px", fontFamily: "poppins" }}
            >
              Weekly
            </MenuItem>
            <MenuItem
              value={20}
              sx={{ fontSize: "12px", fontFamily: "poppins" }}
            >
              Monthly
            </MenuItem>
            <MenuItem
              value={30}
              sx={{ fontSize: "12px", fontFamily: "poppins" }}
            >
              Annualy
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AnalyticsGraph;
