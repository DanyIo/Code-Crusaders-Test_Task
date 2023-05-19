import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { FinancialAppState, Income } from "../../types/types";

const initialState: FinancialAppState = {
  user: {
    id: null,
    name: "Piotr",
    email: "someEmail@gmail.com",
  },
  transactions: [
    { date: "13.05.2023", action: "Income", amount: 819 },
    { date: "16 Mar, 2019", action: "Income", amount: 866.99 },
    { date: "16 Mar, 2019", action: "Income", amount: 654.39 },
    { date: "16 Mar, 2019", action: "Income", amount: 100.81 },
  ],
  stats: [{date: "16 Mar, 2019" , amount : 1000000},{ date: "16 Mar, 2020", action: "Income", amount: 1500000 } ],
  deposit: 2000000,
  credit: 1000000,
  creditScore: 400,
  income: [
    {
      id: 0,
      date: "13.05.2023",
      name: "John Walker",
      paymentMethod: "VISA",
      amount: 819,
    },
    {
      id: 1,
      date: "16 Mar, 2019",
      name: "Paul McCartney",
      paymentMethod: "VISA",
      amount: 866.99,
    },
    {
      id: 2,
      date: "16 Mar, 2019",
      name: "Michael Jackson",
      paymentMethod: "AMEX",
      amount: 654.39,
    },
    {
      id: 3,
      date: "16 Mar, 2019",
      name: "Tom Scholz",
      paymentMethod: "MC",
      amount: 100.81,
    },
  ],
  expense: [],
  totalBudget: 6969696,
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addNewIncome: (state, actions) => {
      const newIncome: Income = {
        id: actions.payload.id,
        date: actions.payload.date,
        name: actions.payload.name,
        paymentMethod: actions.payload.paymentMethod,
        amount: actions.payload.amount,
      };
      state.income.unshift(newIncome);
    },
    deleteIncome: (state, actions) => {
      state.income.splice(actions.payload, 1);
    },
    reduceTheTotalBudget: (state, actions) => {
      state.totalBudget -= actions.payload;
    },
    increaseTotalBudget: (state, actions) => {
      console.log(actions.payload);

      state.totalBudget += actions.payload;
    },
    addCredit: (state, actions) => {
      state.credit += actions.payload;
      state.creditScore -= 100;
    },
    addDeposit: (state, actions) => {
      state.deposit += actions.payload;
    },
    addExpense: (state, actions) => {
      state.expense.push(actions.payload);
    },
    deleteExpense: (state, actions) => {
      state.expense.splice(actions.payload, 1);
    },
    resetCredit: (state) => {
      state.credit = 0;
    },
    resetDeposit: (state) => {
      state.deposit = 0;
    },
    addTransaction: (state, actions) => {
      state.transactions.unshift({
        date: new Date().toDateString(),
        action: actions.payload.action,
        amount: actions.payload.amount,
      });
    },
    upgradeStats: (state, action) => {
      state.stats.push(action.payload);
    },
  },
});

export const {
  addNewIncome,
  deleteIncome,
  reduceTheTotalBudget,
  increaseTotalBudget,
  addCredit,
  addDeposit,
  addExpense,
  deleteExpense,
  resetCredit,
  resetDeposit,
  addTransaction,
  upgradeStats,
} = financeSlice.actions;

export const selectUserName = (state: RootState) => state.finance.user.name;

export const selectEmail = (state: RootState) => state.finance.user.email;

export const selectIncome = (state: RootState) => state.finance.income;

export const selectTotalBudget = (state: RootState) =>
  state.finance.totalBudget;

export const selectCreditScore = (state: RootState) =>
  state.finance.creditScore;

export const selectCredit = (state: RootState) => state.finance.credit;

export const selectExpense = (state: RootState) => state.finance.expense;

export const selectDeposit = (state: RootState) => state.finance.deposit;

export const selectTransactions = (state: RootState) =>
  state.finance.transactions;

export const selectStats = (state: RootState) => state.finance.stats;

export default financeSlice.reducer;
