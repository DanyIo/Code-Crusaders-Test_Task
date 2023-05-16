import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

import { useSelector } from "react-redux";
import {
  selectIncome,
  deleteIncome,
} from "../../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../../app/hooks";

export default function IncomeHistory() {
  const allIncomes = useSelector(selectIncome);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        marginTop: "30px",
        padding: "5px",
        width: "90%",
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
          {allIncomes.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.paymentMethod} •••• •••• •••• ••••</TableCell>
              <TableCell align="left">{`${row.amount} $`}</TableCell>
              <TableCell>
                <IconButton
                  color="secondary"
                  sx={{ color: "black" }}
                  onClick={() => dispatch(deleteIncome(index))}
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box mt={2} />
    </Box>
  );
}
