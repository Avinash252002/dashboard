import { Box, Typography } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";
import ApexCharts from "react-apexcharts";

const ProfitView = () => {
  const chartOptions = {
    series: [70],
    options: {
      chart: {
        height: "100%",
        width: "100%",
        offsetY: 0,
      },
      grid: {
        padding: {
          top: -23,
          bottom: -20,

          left: -10,
        },
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          offsetX: 0,
          startAngle: 0,
          endAngle: 360,
          track: {
            background: '#313563',
            show: true,
          },
          hollow: {
            margin: 0, // Set margin to 0
            size: "45%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "18px",
              color: "#fff",
              fontFamily: "Poppins",
              offsetY: 0,
            },
            value: {
              show: true,
              fontSize: "8px",
              // fontFamily: "Poppins",

              offsetY: 0,
              color: "grey",
              formatter: function (val: any) {
                console.log(val)
                return "Goal Completed";
              },
            },
          },
          thickness: 1,
        },
      },
      stroke: {
        lineCap: "round",
      },
      colors: ["#7393f9"],
      labels: ["70%"],
    },
  };

  return (
    <Box
      display={"flex"}
      bgcolor={"#1f2029"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      width={{xs : "93%" , md : "46%" , lg : "30%"}}
      p={2}
      pb={2.2}
      justifyContent={"space-between"}
      borderRadius={"8px"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={2}>
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
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <div
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "160px",
            maxWidth: "160px",
            position: "relative",
          }}
        >
          <ApexCharts
            options={chartOptions.options as any}
            series={chartOptions.series}
            type="radialBar"
          />
          <Typography position={"absolute"} bottom={"-10px"} fontSize={"8px"} sx={{textWrap : "nowrap"}} fontFamily={"poppins"} color={"grey"}>
            * The values here have been rounded off
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProfitView;
