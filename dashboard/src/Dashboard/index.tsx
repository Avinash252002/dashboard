import { Box } from "@mui/material";

import Counts from "./Counts";
import ProfitView from "./ProfitView";
import Categories from "./Categories";
import AnalyticsGraph from "./AnalyticsGraph";
import Feedback from "./Feedback";
import RecentOrders from "./RecentOrders";

const DashBoard = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} color={"#fff"} gap={3} >
      <h2 style={{ fontWeight: "500" }}>Dashboard</h2>
      <Box display={"flex"} gap={3} flexDirection={{xs : "column" , md : "row"}} flexWrap={"wrap"} width={"100%"}>
        <Counts />
        <ProfitView />
      </Box>

      <Box display={"flex"} gap={3}   flexWrap={"wrap"} width={"100%"}>
        <AnalyticsGraph />
        <Categories />
      </Box>

      <Box display={"flex"} gap={3} flexDirection={"row"} flexWrap={"wrap"} width={"100%"}>
        <RecentOrders />
        <Feedback />
      </Box>
    </Box>
  );
};

export default DashBoard;
