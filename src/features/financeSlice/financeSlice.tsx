import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { FinancialAppState } from "../../types/types";

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
  income: 0,
  totalBudget: 6969696,
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {},
});

export const selectUserName = (state: RootState) => state.finance.user.name;

export const selectTotalBudget = (state: RootState) =>
  state.finance.totalBudget;

export default financeSlice.reducer;
