
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";

interface Column {
  id: "customer" | "code" | "population" | "size";
  label: string;
  minWidth?: number;
  align?: "left" | "right" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "customer", label: "Customer", minWidth: 200 },
  { id: "code", label: "Order No", minWidth: 130 },
  {
    id: "population",
    label: "Amount",
    minWidth: 130,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Status",
    minWidth: 100,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  customer: string;
  code: string;
  population: number;
  size: string;
}

function createData(
  customer: string,
  code: string,
  population: number,
  size: string
): Data {
  return { customer, code, population, size };
}

const rows = [
  createData("John Doe", "ORD123456", 150.75, "Delivered"),
  createData("Jane Smith", "ORD123457", 250.0, "Delivered"),
  createData("Alice Johnson", "ORD123458", 75.5, "Canceled"),
  createData("Bob Brown", "ORD123459", 89.99, "Delivered"),
  createData("Carol White", "ORD123460", 123.45, "Pending"),
  createData("David Green", " ORD123461", 200.0, "Delivered"),
  createData("Eva Black", "ORD123462", 175.25, "Canceled"),
  createData("Frank Yellow", "ORD123463", 99.99, "Delivered"),
  createData("Grace Blue", "ORD123464", 49.99, "Canceled"),
  createData("Henry Orange", "ORD123465", 149.99, "Delivered"),
  createData("Isabel Red", "ORD123466", 110.5, "Delivered"),
  createData("Jack Purple", "ORD123467", 85.75, "Canceled"),
  createData("Karen Pink", "ORD123468", 299.99, "Delivered"),
  createData("Louis Gray", "ORD123469", 55.0, "Pending"),
  createData("Mona White", "ORD123470", 130.2, "Delivered"),
];

const RecentOrders = () => {



  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#1f2029"}
      gap={2}
      width={"62.7%"}
      p={2}
      borderRadius={"8px"}
    >
      <h3 style={{ fontWeight: "500" }}>Recent Orders</h3>
      {/* <TableContainer component={Paper} sx={{ backgroundColor: "transparent" , }}>
        <Table
        
          sx={{ backgroundColor: "transparent", borderCollapse: "collapse" }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "1px solid grey",
                  color: "#fff",
                  fontWeight: "500",
                  fontFamily: "poppins",

                }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid grey",
                  color: "#fff",
                  fontWeight: "500",
                  fontFamily: "poppins",

                }}
              >
                Order No.
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid grey",
                  color: "#fff",
                  fontWeight: "500",
                  fontFamily: "poppins",
                }}
                align="center"
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid grey",
                  color: "#fff",
                  fontWeight: "500",
                  fontFamily: "poppins",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <TableContainer
          sx={{
            height: "200px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          <Table
            sx={{ backgroundColor: "transparent", borderCollapse: "collapse" }}
          >
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "1px solid grey",
                      color: "#fff",
                      fontFamily: "poppins",
                      fontSize: "12px",
                      width :"200px"

                    }}


                  >
                    <Box display={"flex"}  gap={1} alignItems={"center"}>
                      <Avatar
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        sx={{ height: "30px", width: "30px" }}
                      />
                      <Typography variant="caption" fontFamily={"poppins"}>
                        John Doe
                      </Typography>
                    </Box>
                    
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid grey",
                      color: "#fff",
                      fontFamily: "poppins",
                      fontSize: "12px",
                    width :"100px"

                    }}
                  >
                    30-293232
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid grey",
                      color: "#fff",
                      fontFamily: "poppins",
                      fontSize: "12px",
                      
                    }}
                  >
                    $ 50000
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid grey",
                      color: "#fff",
                      fontFamily: "poppins",
                      fontSize: "12px",
                    }}
                  >
                    Pending
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableContainer> */}

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "transparent",
          fontFamily: "poppins",
        }}
      >
        <TableContainer sx={{ maxHeight: 250, backgroundColor: "transparent" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{ backgroundColor: "transparent" }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{
                      borderBottom: "1px solid grey",
                      color: "#fff",
                      bgcolor: "#1f2029",
                      fontWeight: "500",
                      fontFamily: "poppins",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows

                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{
                              borderBottom: "1px solid grey",
                              color: "#fff",
                              fontFamily: "poppins",
                              fontSize: "12px",
                            }}
                          >
                            <Box display={"flex"} gap={1} alignItems={"center"}>
                              {column.id === "customer" && (
                                <Avatar
                                  src={
                                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  }
                                  sx={{ height: "30px", width: "30px" }}
                                />
                              )}
                              {column.id == "size" ? (
                                <Box
                                  display={"flex"}
                                  alignItems={"center"}
                                  borderRadius={"20px"}
                                  p={"2px"}
                                  px={"8px"}
                                  bgcolor={value == "Delivered" ? "#145346" : "#623239"}
                                >
                                  <Typography
                                    fontSize={"11px"}
                                    fontFamily={"poppins"}
                                    color={value == "Delivered" ? "#00ca83" : "#f45e5b"}
                                  >
                                    {value}
                                  </Typography>
                                </Box>
                              ) : column.format && typeof value === "number" ? (
                                "$ " + column.format(value)
                              ) : (
                                value
                              )}
                            </Box>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default RecentOrders;
