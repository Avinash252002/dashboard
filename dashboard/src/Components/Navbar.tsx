import {
  Search,
  NotificationsNoneOutlined,
  SettingsOutlined,
  EmailOutlined,
  LogoutRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  TextField,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import  { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isXs = useMediaQuery("(max-width: 601px)");

  // Open the popover
  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Determine if the popover is open
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
            width: { xs: "150px", sm: "250px" },
            transition: "width 0.3s ease",
            "&:focus-within": {
              width: { xs: "200px", sm: "350px" },
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
            display: { xs: "none", sm: "flex" },
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
            display: { xs: "none", sm: "flex" },

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
          <Badge
            badgeContent={" "}
            color="primary"
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                minWidth: "9px",
                height: "11px",
                fontSize: "10px",
              },
            }}
          >
            <NotificationsNoneOutlined
              fontSize="small"
              sx={{ color: "#9e9e9e" }}
            />
          </Badge>
        </IconButton>

        <Avatar
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=800"
          sx={{ cursor: "pointer" }}
          onClick={isXs ? handleClick : undefined}
        />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            "& .MuiPaper-root": {
              bgcolor: "#1f2029",
              color: "#fff",
              borderRadius: "8px",
              border: "1px solid #282b2f",
            },
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            color={"#fff"}
            sx={{ p: 2 }}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}

              alignItems={"center"}
              gap={2}
            >
              <IconButton
                sx={{
                  display: { xs: "none", sm: "flex" },

                  bgcolor: "#43464b",

                  ":hover": {
                    bgcolor: "#616161",
                  },
                }}
              >
                <EmailOutlined fontSize="small" sx={{ color: "#9e9e9e" }} />
              </IconButton>
              <Typography variant="body2" fontFamily={"poppins"}>
                Messages
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}

              alignItems={"center"}
              gap={2}
            >
              <IconButton
                sx={{
                  display: { xs: "none", sm: "flex" },

                  bgcolor: "#43464b",

                  ":hover": {
                    bgcolor: "#616161",
                  },
                }}
              >
                <SettingsOutlined fontSize="small" sx={{ color: "#9e9e9e" }} />
              </IconButton>
              <Typography variant="body2" fontFamily={"poppins"}>
                Settings
              </Typography>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"row"}

              alignItems={"center"}
              gap={2}
            >
              <IconButton
                sx={{
                  display: { xs: "none", sm: "flex" },

                  bgcolor: "#43464b",

                  ":hover": {
                    bgcolor: "#616161",
                  },
                }}
              >
                <LogoutRounded fontSize="small" sx={{ color: "#9e9e9e" }} />
              </IconButton>
              <Typography variant="body2" fontFamily={"poppins"}>
                Logout
              </Typography>
            </Box>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default Navbar;
