interface User {
  id: null | string;
  name: string;
  email: string;
}

export interface FinancialAppState {
  user: User;
  accounts: any[]; // Replace 'any' with the actual type for accounts
  transactions: any[]; // Replace 'any' with the actual type for transactions
  deposit: number;
  credit: number;
  income: number;
  totalBudget: number;
}
