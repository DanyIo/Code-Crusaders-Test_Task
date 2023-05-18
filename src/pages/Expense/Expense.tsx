import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

import { ExpenseList } from "./ExpenseList/ExpenseList";

import { addExpense } from "../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../app/hooks";

const ExpensePage = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenses, setExpenses] = useState<{ title: string; amount: number }[]>(
    []
  );

  const dispatch = useAppDispatch();

  const handleExpenseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the expense title and amount
    if (expenseTitle.trim() === "" || isNaN(parseFloat(expenseAmount))) {
      // Handle the case when either the title or amount is empty or not a valid number
      return;
    }

    // Create a new expense object
    const newExpense = {
      title: expenseTitle,
      amount: parseFloat(expenseAmount),
    };

    dispatch(addExpense(newExpense));

    // Add the new expense to the expenses array
    setExpenses([...expenses, newExpense]);

    // Reset the input fields
    setExpenseTitle("");
    setExpenseAmount("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
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
      <ExpenseList />
    </Box>
  );
};

export default ExpensePage;
