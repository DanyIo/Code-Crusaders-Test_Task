import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "./components/Header/Header";
import { Wallet } from "./pages/Wallet/Wallet";
import { Income } from "./pages/Income/Income";
import { Expense } from "./pages/Expense/Expense";
import { Credit } from "./pages/Credit/Credit";
import { Deposit } from "./pages/Deposit/Deposit";
import { GenerateReport } from "./pages/GenerateReport/GenerateReport";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Wallet />} />
            <Route path="financial-dashboard/" element={<Wallet />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/generatereport" element={<GenerateReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Box>
  );
}

export default App;
