
import { Box, IconButton, Typography } from "@mui/material";
import {
  AdjustRounded,

  KeyboardArrowRightOutlined,
  LunchDiningRounded,
  RoomServiceRounded,
} from "@mui/icons-material";

const Categories = () => {
  const data = [
    {
      id: 1,
      title: "Goals",
      icon: AdjustRounded,
      iconColor: "#d06538",
      iconButtonColor: "#613138",
    },
    {
      id: 2,
      title: "Popular Dishes",
      icon: LunchDiningRounded,
      iconColor: "#3f56b3",
      iconButtonColor: "#293267",
    },
    {
      id: 3,
      title: "Menus",
      icon: RoomServiceRounded,
      iconColor: "#1771a1",
      iconButtonColor: "#214b61",
    },
  ];

  return (
    <Box
      display={"flex"}
      bgcolor={"#1f2029"}
      flexDirection={"column"}
      width={{xs : "93%", md : "100%" , lg: "30%"}}

      gap={2}
      p={2}
      justifyContent={"space-between"}
      borderRadius={"8px"}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={1}
            alignItems={"center"}
          >
            <IconButton
              sx={{
                bgcolor: item.iconButtonColor,
                ":hover": { bgcolor: item.iconButtonColor },
                height: "80px",
                width: "80px",
              }}
            >
              <item.icon  sx={{ color: item.iconColor , fontSize : "36px" }} />
            </IconButton>
            <Typography variant="body2" fontFamily={"poppins"}>
              {item.title}
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{
              bgcolor: "#43464b",
              height: "30px",
              width: "30px",

              ":hover": {
                bgcolor: "#616161",
              },
            }}
          >
            <KeyboardArrowRightOutlined sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
