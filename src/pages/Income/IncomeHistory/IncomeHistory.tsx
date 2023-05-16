import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";

function createData(
  id: number,
  date: string,
  name: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, paymentMethod, amount };
}

const table = [
  createData(0, "13.05.2023", "John Walker", "VISA ⠀•••• 5146", 819),
  createData(1, "16 Mar, 2019", "Paul McCartney", "VISA ⠀•••• 2574", 866.99),
  createData(2, "16 Mar, 2019", "Michael Jackson", "AMEX ⠀•••• 2000", 654.39),
  createData(3, "16 Mar, 2019", "Tom Scholz", "MC ⠀•••• 1253", 100.81),
];

export default function IncomeHistory() {
  return (
    <Box
      sx={{
        marginTop: "30px",
        padding: "10px",
        paddingTop: 0,
        borderRadius: "5px",
        fontFamily: "Georgia",
        background: "white",
      }}
    >
      <h2
        style={{
          padding: 10,
          fontWeight: "normal",
          color: "#3f51b5",
          fontSize: 26,
        }}
      >
        Income history
      </h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: "Georgia" }}>Date</TableCell>
            <TableCell style={{ fontFamily: "Georgia" }}>
              Name of sender
            </TableCell>
            <TableCell style={{ fontFamily: "Georgia" }}>
              Payment method
            </TableCell>
            <TableCell style={{ fontFamily: "Georgia" }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        sx={{
          display: "block",
          marginTop: "10px",
          padding: "10px",
          color: "#3f51b5",
        }}
      >
        See whole history
      </Link>
    </Box>
  );
}
