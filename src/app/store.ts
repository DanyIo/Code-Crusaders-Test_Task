import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import FinanceReducer from "../features/financeSlice/financeSlice";

export const store = configureStore({
  reducer: {
    finance: FinanceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
