import {
  AccountBalanceRounded,
  ArrowDropDown,
  ArrowDropUp,

  LocalMallRounded,
  LuggageRounded,
  MonetizationOn,
  Person,
  Receipt,
  Search,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const Counts = () => {
  const data = [
    {
      id: 1,
      title: "Total Orders",
      count: 75,
      increase: true,
      mainIcon: LuggageRounded ,
      iconColor: "#4565ef",
      iconButtonColor: "#273469",
      increaseIconColor: "#15c08f",
      decreaseIconColor: "#d15a5b",
      rate: "10%",
      increaseIcon: ArrowDropUp,
      decreaseIcon: ArrowDropDown,
    },
    {
      id: 2,
      title: "Total Delivered",
      count: 70,
      increase: false,
      mainIcon: LocalMallRounded,
      iconColor: "#00ca83",
      iconButtonColor: "#145346",
      increaseIconColor: "#15c08f",
      decreaseIconColor: "#d15a5b",
      rate: "5%",
      increaseIcon: ArrowDropUp,
      decreaseIcon: ArrowDropDown,
    },
    {
      id: 3,
      title: "Total Cancelled",
      count: 5,
      increase: true,
      mainIcon: LocalMallRounded,
      iconColor: "#f45e5b",
      iconButtonColor: "#623239",
      increaseIconColor: "#15c08f",
      decreaseIconColor: "#d15a5b",
      rate: "8%",
      increaseIcon: ArrowDropUp,
      decreaseIcon: ArrowDropDown,
    },
    {
      id: 4,
      title: "Total Revenue",
      count: 12,
      increase: false,
      mainIcon: AccountBalanceRounded,
      iconColor: "#e3439d",
      iconButtonColor: "#5a2b4b",
      increaseIconColor: "#15c08f",
      decreaseIconColor: "#d15a5b",
      rate: "3%",
      increaseIcon: ArrowDropUp,
      decreaseIcon: ArrowDropDown,
    },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      width={"65%"}
      justifyContent={"space-between"}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          bgcolor={"#1f2029"}
          flexDirection={"column"}
          width={"25%"}
          gap={2}
          p={2}
          borderRadius={"8px"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Box display={"flex"} flexDirection={"row"}>
              <IconButton
                sx={{ bgcolor: item.iconButtonColor, borderRadius: "8px" , ":hover" : {
                  bgcolor: item.iconButtonColor
                } }}
              >
                <item.mainIcon sx={{ color: item.iconColor }} />
              </IconButton>
            </Box>
            <Typography variant="caption" fontFamily={"poppins"}>
              {item.title}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={1}
          >
            <Typography variant="h5" fontFamily={"poppins"} fontWeight={"bold"}>
              {item.id == 4 ? "$" : item.id == 3 && "0"}{item.count} {item.id == 4 ? "k" : ""}
            </Typography>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              {item.increase ? (
                <item.increaseIcon sx={{ color: item.increaseIconColor }} />
              ) : (
                <item.decreaseIcon sx={{ color: item.decreaseIconColor }} />
              )}

              <Typography
                variant="caption"
                fontFamily={"poppins"}
                color={item.increase ? item.increaseIconColor : item.decreaseIconColor}
              >
                {item.rate}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Counts;
