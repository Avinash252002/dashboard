import {
  Search,
  NotificationsNoneOutlined,
  SettingsOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, TextField } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgcolor={"#1f2029"}
      p={2}
    >
      <Box display={"flex"} flexDirection={"row"} gap={4} alignItems={"center"}>
        <img
          src="https://img.icons8.com/fluency/48/qgenda.png"
          alt="logo"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}

        />
        <TextField
          size="small"
          placeholder="Search"
          sx={{
            width: "250px", 
            transition: "width 0.3s ease", 
            "&:focus-within": {
              width: "350px",
            },
            "& .MuiInputBase-root": {
              backgroundColor: "#282b2f", 
              borderRadius: "8px", 
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#fff", 
              opacity: 0.6, 
            },
          }}
          inputProps={{
            style: {
              fontFamily: "poppins",
              paddingLeft: "10px",
              fontSize: "13px",
              color: "#fff",
            },
          }}
          InputProps={{
            startAdornment: <Search sx={{ color: "#fff" }} />,
          }}
        />
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={3}>
        <IconButton
          sx={{
            bgcolor: "#43464b",
            ":hover": {
              bgcolor: "#616161",
            },
          }}
        >
          <EmailOutlined fontSize="small" sx={{ color: "#9e9e9e" }} />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#43464b",

            ":hover": {
              bgcolor: "#616161",

            },
          }}
        >
          <SettingsOutlined fontSize="small" sx={{ color: "#9e9e9e" }} />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#43464b",

            ":hover": {
              bgcolor: "#616161",

            },
          }}
        >
          <Badge  badgeContent={" "} color="primary" overlap="circular"  sx={{
        '& .MuiBadge-badge': {
          minWidth: '9px',  
          height: '11px',    
          fontSize: '10px',  

        },
      }}>
          <NotificationsNoneOutlined
            fontSize="small"
            sx={{ color: "#9e9e9e" }}
          />
          </Badge>
        </IconButton>

        <Avatar src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=800" sx = {{cursor : "pointer"}} />
      </Box>
    </Box>
  );
};

export default Navbar;
