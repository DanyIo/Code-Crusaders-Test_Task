import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Box,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

import { useSelector } from "react-redux";

import {
  selectExpense,
  deleteExpense,
} from "../../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../../app/hooks";

export const ExpenseList = () => {
  const expenses = useSelector(selectExpense);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        marginTop: "10px",
        padding: "5px",
        width: "90%",
        paddingTop: 0,
        borderRadius: "5px",
        fontFamily: "Georgia",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {expenses.length === 0 ? (
        <Typography sx={{ fontFamily: "Georgia", ml: 4 }}>
          No expenses added yet.
        </Typography>
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontFamily: "Georgia" }}>Title</TableCell>
              <TableCell style={{ fontFamily: "Georgia" }}>Amount</TableCell>
              <TableCell style={{ fontFamily: "Georgia" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((row, index) => (
              <TableRow key={row.title}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    sx={{ color: "black" }}
                    onClick={() => dispatch(deleteExpense(index))}
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Box mt={2} />
    </Box>
  );
};
