
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import ApexCharts from "react-apexcharts";

const AnalyticsGraph = () => {
  const [value, setValue] = React.useState<number>(10);


  
  const chartOptions = {
    series: [{
      name: 'Goal Completed',
      data: [49 , 40, 30, 20, 30, 20, 30, 40, 60, 20],


    }],
    options: {
      chart: {
        height: 150,
        type: 'bar',
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 13,
          columnWidth: '40%',
          endingShape: 'rounded',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      
      dataLabels: {
        enabled: false,
        formatter: function (val : number) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["grey"]
        }
      },
      grid: {
        borderColor: 'gray', 
      },
      
      xaxis: {
        categories: [5 , 10, 15, 20, 25, 30, 35, 40, 45, 50 , 60],
        tickPlacement: 'on',
        position: 'bottom',
        labels: {
        style: {
          colors: 'gray', // Set X-axis label color
          fontSize: '12px',
          fontFamily: 'Poppins'
        },
      },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
       
        tooltip: {
          enabled: true,
          offsetY: -35,
          style: {
            fontSize: '12px',
            fontFamily: 'Poppins',
            color: 'gray'
          }
          
        }
      },
      fill: {
        type: 'solid'
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        tickAmount: 3,
        labels: {
          show: true,
          style: {
            colors: 'gray', // Set Y-axis label color
            fontSize: '12px',
            fontFamily: 'Poppins'
          },
          formatter: function (val : number) {
            return val / 10 + "K";
          }
        }
        
      
      },
      colors : ["#7393f9"],
      

      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,

        offsetY: 330,
        align: 'center',
        style: {
          color: '#000',
        }
      }
    },


  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={{ xs: "82%" , md : "100%" ,  lg : "62.7%"}}
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

      <ApexCharts
        options={chartOptions.options as any}
        series={chartOptions.series}
        type="bar"
        height={200}
      />
    </Box>
  );
};

export default AnalyticsGraph;
