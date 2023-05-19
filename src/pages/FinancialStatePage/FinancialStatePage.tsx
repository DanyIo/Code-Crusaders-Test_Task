import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import {
  increaseTotalBudget,
  reduceTheTotalBudget,
  resetCredit,
  resetDeposit,
  selectCredit,
  selectDeposit,
  selectEmail,
  selectExpense,
  selectIncome,
  selectTotalBudget,
  selectUserName,
} from "../../features/financeSlice/financeSlice";
import styled from "@emotion/styled";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useAppDispatch } from "../../app/hooks";

const FinancialStatePage = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const dispatch = useAppDispatch();

  const income = useSelector(selectIncome);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectEmail);
  const totalBudget = useSelector(selectTotalBudget);
  const expense = useSelector(selectExpense);
  const credit = useSelector(selectCredit);
  const deposit = useSelector(selectDeposit);

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const sortedIncome = [...income].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const budgetData = [];

  if (credit !== 0) {
    budgetData.unshift({ name: "Credit", value: credit });
  }

  if (deposit !== 0) {
    budgetData.unshift({ name: "Deposit", value: deposit });
  }

  const incomeTotal = income.reduce((total, exp) => total + exp.amount, 0);
  if (incomeTotal !== 0) {
    budgetData.unshift({ name: "Income", value: incomeTotal });
  }

  const expenseTotal = expense.reduce((total, exp) => total + exp.amount, 0);
  if (expenseTotal !== 0) {
    budgetData.unshift({ name: "Expenses", value: expenseTotal });
  }

  const COLORS = ["#82ca9d", "#8884d8"];

  return (
    <CustomScrollBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "3%",
          padding: "2rem",
          fontFamily: "Georgia",
          width: "800px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Box sx={{ marginTop: "2rem", mb: 2 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            User Information
          </Typography>
          <Typography>Name: {userName}</Typography>
          <Typography>Email: {userEmail}</Typography>
        </Box>

        {sortedIncome.length === 0 || (
          <Box sx={{ marginTop: "2rem" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Income
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      onClick={handleSort}
                      style={{ cursor: "pointer" }}
                    >
                      Date
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedIncome.map((income) => (
                    <TableRow key={income.id}>
                      <TableCell>{income.date}</TableCell>
                      <TableCell>{income.name}</TableCell>
                      <TableCell>{income.paymentMethod}</TableCell>
                      <TableCell>${income.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {expense.length === 0 || (
          <Box sx={{ marginTop: "2rem" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Expenses
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expense.map((expense, index) => (
                    <TableRow key={index}>
                      <TableCell>{expense.title}</TableCell>
                      <TableCell>${expense.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        <Box sx={{ marginTop: "3rem" }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Total Budget:
          </Typography>
          <Typography variant="h6">${totalBudget.toLocaleString()}</Typography>
        </Box>
        {credit === 0 || (
          <Box
            sx={{
              marginTop: "3rem",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Credit:
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>${credit.toLocaleString()}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  backgroundColor: "black",
                  ":hover": {
                    backgroundColor: "gray",
                  },
                }}
                onClick={() => {
                  dispatch(reduceTheTotalBudget(credit * 1.2));
                  dispatch(resetCredit());
                }}
              >
                Cancel Credit
              </Button>
            </div>
          </Box>
        )}
        {deposit === 0 || (
          <Box
            sx={{
              marginTop: "3rem",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Deposit:
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>${deposit.toLocaleString()}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  backgroundColor: "black",
                  ":hover": {
                    backgroundColor: "gray",
                  },
                }}
                onClick={() => {
                  dispatch(increaseTotalBudget(deposit * 1.1));
                  dispatch(resetDeposit());
                }}
              >
                Cancel deposit
              </Button>
            </div>
          </Box>
        )}

        <CssBaseline />
        {budgetData.length === 0 || (
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">Budget Distribution</Typography>
            <PieChart width={400} height={300}>
              <Pie
                dataKey="value"
                data={budgetData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={(entry) => entry.name}
              >
                {budgetData.map((entry, index) => {
                  let fill;
                  if (entry.name === "Credit") {
                    fill = "black";
                  } else if (entry.name === "Deposit") {
                    fill = "blue";
                  } else {
                    fill = COLORS[index % COLORS.length];
                  }
                  return <Cell key={index} fill={fill} />;
                })}
              </Pie>
              <Legend verticalAlign="bottom" />
            </PieChart>
          </Box>
        )}
      </Box>
    </CustomScrollBar>
  );
};

const CustomScrollBar = styled("div")(() => ({
  maxHeight: "600px",
}));

export default FinancialStatePage;
