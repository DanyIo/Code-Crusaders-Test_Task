import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import axios from "axios";

import { Box } from "@mui/material";

import { Header } from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const WalletPage = lazy(() => import("./pages/Wallet/Wallet"));
const IncomePage = lazy(() => import("./pages/Income/Income"));
const ExpensePage = lazy(() => import("./pages/Expense/Expense"));
const CreditPage = lazy(() => import("./pages/Credit/Credit"));
const DepositPage = lazy(() => import("./pages/Deposit/Deposit"));
const GenerateReportPage = lazy(
  () => import("./pages/GenerateReport/GenerateReport")
);
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

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
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <WalletPage />
                </Suspense>
              }
            />
            <Route
              path="financial-dashboard/"
              element={
                <Suspense fallback={<Loader />}>
                  <WalletPage />
                </Suspense>
              }
            />
            <Route
              path="/income"
              element={
                <Suspense fallback={<Loader />}>
                  <IncomePage />
                </Suspense>
              }
            />
            <Route
              path="/expense"
              element={
                <Suspense fallback={<Loader />}>
                  <ExpensePage />
                </Suspense>
              }
            />
            <Route
              path="/credit"
              element={
                <Suspense fallback={<Loader />}>
                  <CreditPage />
                </Suspense>
              }
            />
            <Route
              path="/deposit"
              element={
                <Suspense fallback={<Loader />}>
                  <DepositPage />
                </Suspense>
              }
            />
            <Route
              path="/generatereport"
              element={
                <Suspense fallback={<Loader />}>
                  <GenerateReportPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Box>
  );
}

export default App;
