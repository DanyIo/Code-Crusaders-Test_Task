import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { FinancialAppState, Income } from "../../types/types";

const initialState: FinancialAppState = {
  user: {
    id: null,
    name: "Piotr",
    email: "",
  },
  accounts: [],
  transactions: [],
  deposit: 0,
  credit: 0,
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
      state.totalBudget += actions.payload;
    },
    addCredit: (state, actions) => {
      state.credit += actions.payload;
      state.creditScore -= 100;
    },
    addDeposit: (state, actions) => {
      state.deposit += actions.payload;
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
} = financeSlice.actions;

export const selectUserName = (state: RootState) => state.finance.user.name;

export const selectIncome = (state: RootState) => state.finance.income;

export const selectTotalBudget = (state: RootState) =>
  state.finance.totalBudget;

export const selectCreditScore = (state: RootState) =>
  state.finance.creditScore;

export default financeSlice.reducer;
