import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

import { ExpenseList } from "./ExpenseList/ExpenseList";
import { expenseSetGetService } from "../../services/expenseSetGetService";
import { expenseDeleteService } from "../../services/expenseDeleteService";

import { addExpense } from "../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../app/hooks";
import { CustomScrollBar } from "../../components/ScrollBar/ScrollBar";

const ExpensePage = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenses, setExpenses] = useState<{ title: string; amount: number }[]>(
    []
  );

  const dispatch = useAppDispatch();

  const handleExpenseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (expenseTitle.trim() === "" || isNaN(parseFloat(expenseAmount))) {
      return;
    }

    const newExpense = {
      title: expenseTitle,
      amount: parseFloat(expenseAmount),
    };

    expenseSetGetService(
      newExpense.title,
      newExpense.amount
    );

    //expenseDeleteService();

    dispatch(addExpense(newExpense));

    setExpenses([...expenses, newExpense]);

    setExpenseTitle("");
    setExpenseAmount("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "3%",
        marginTop: 20,
        padding: "2rem",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        marginBottom: "50px",
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontFamily: "Georgia" }}>
        Expense Page
      </Typography>
      <form onSubmit={handleExpenseSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Expense Title"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Expense Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{
              mt: 2,
              backgroundColor: "black",
              ":hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Add Expense
          </Button>
        </Box>
      </form>
      <h2
        style={{
          padding: 10,
          fontWeight: "normal",
          color: "black",
          fontSize: 26,
        }}
      >
        Expense history
      </h2>
      <CustomScrollBar>
        <ExpenseList />
      </CustomScrollBar>
    </Box>
  );
};

export default ExpensePage;
