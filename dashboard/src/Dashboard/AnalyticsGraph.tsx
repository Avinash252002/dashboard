
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import ApexCharts from "react-apexcharts";

const AnalyticsGraph = () => {
  const [value, setValue] = React.useState<number>(10);

  const chartOptions = {
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val : number) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val : number) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },


  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={{ xs: "93%" , md : "100%" ,  lg : "62.7%"}}
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
