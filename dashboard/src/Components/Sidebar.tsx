import {
  AccountBalanceWalletOutlined,
  AccountBalanceWalletRounded,
  AssessmentOutlined,
  AssessmentRounded,
  AssignmentTurnedInOutlined,
  AssignmentTurnedInRounded,
  HomeOutlined,
  HomeRounded,
  LocalMallOutlined,
  LocalMallRounded,
  LogoutRounded,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  const routes = [
    {
      name: "Home",
      icon: <HomeOutlined />,
      filledIcon: <HomeRounded />,
      path: "/",
    },
    {
      name: "Analytics",
      icon: <AssessmentOutlined />,
      filledIcon: <AssessmentRounded />,
      path: "/analytics",
    },
    {
      name: "Tasks",
      icon: <AssignmentTurnedInOutlined />,
      filledIcon: <AssignmentTurnedInRounded />,
      path: "/tasks",
    },
    {
      name: "Transactions",
      icon: <AccountBalanceWalletOutlined />,
      filledIcon: <AccountBalanceWalletRounded />,

      path: "/transactions",
    },
    {
      name: "Orders",
      icon: <LocalMallOutlined />,
      filledIcon: <LocalMallRounded />,
      path: "/orders",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#1f2029"}
      justifyContent={"space-between"}
      height={"100%"}
      color={"#fff"}
      py={2}

    >


      <Box display={"flex"} flexDirection={{ xs: "row", md: "column"}} justifyContent={"space-between"} >
      {routes.map((route, index) => (
        <Box
          key={index}
          position={"relative"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          sx={{
            transition: "all 2s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              left: {xs : "25%" , md : "0"},
              top:{xs : "100%" , md : "50%"} , // Position it vertically centered
              transform: {xs : "translateX(0%)" , md : "translateY(-50%)"} , // Adjust for correct centering
              width: {xs : "50%" , md : "3px"}, // Width of the border
              height: {xs : "3px" , md : "50%"}, // Adjust height as needed (50% of the container height)
              bgcolor: currentPath === route.path ? "#7092EC" : "transparent",
              transition: "all 1s ease",
            },
          }}
          p={1}
          px={2}
        >
          <IconButton
            onClick={() => navigate(route.path)}
            sx={{
              color: currentPath === route.path ? "#7092EC" : "#9e9e9e",
              bgcolor: "transparent",
            }}
          >
            {currentPath === route.path ? route.filledIcon : route.icon}
          </IconButton>
        </Box>
      ))}
      </Box>
      <IconButton

            sx={{
              display : {xs : "none" , md : "flex"},
              position : "absolute",
              bottom : 30,
              left : "25%",
              bgcolor: "transparent",
            }}
          >
            <LogoutRounded sx={{ color: "#9e9e9e" }} />
          </IconButton>


    </Box>


  );
};

export default Sidebar;
