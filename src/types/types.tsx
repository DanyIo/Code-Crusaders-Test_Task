type User = {
  id: number | null;
  name: string;
  email: string;
};

export type Income = {
  id: number;
  date: string;
  name: string;
  paymentMethod: string;
  amount: number;
};

export type Expense = {
  title: string;
  amount: number;
};

export type FinancialAppState = {
  user: User;
  accounts: any[];
  transactions: any[];
  deposit: number;
  credit: number;
  creditScore: number;
  income: Income[];
  expense: Expense[];
  totalBudget: number;
};
