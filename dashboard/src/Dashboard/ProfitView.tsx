
import { Box, Typography } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

const ProfitView = () => {
  return (
    <Box
      display={"flex"}
      bgcolor={"#1f2029"}
      flexDirection={"column"}
      width={"30%"}
      gap={2}
      p={2}
      pb = {2.2}
      justifyContent={"space-between"}
      borderRadius={"8px"}
    >
      <Typography variant="caption" fontFamily={"poppins"}>
        Net Profit
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant="h4" fontWeight={"bold"} fontFamily={"poppins"}>
          $ 6759.25
        </Typography>

        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <ArrowDropUp sx={{ color: "#80db68" }} />

          <Typography
            variant="caption"
            fontFamily={"poppins"}
            color={"#80db68"}
          >
            3 %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfitView;
