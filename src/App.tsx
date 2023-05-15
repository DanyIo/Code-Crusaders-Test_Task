import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import { Box } from "@mui/material";

import { Header } from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const Wallet = lazy(() => import("./pages/Wallet/Wallet"));
const Income = lazy(() => import("./pages/Income/Income"));
const Expense = lazy(() => import("./pages/Expense/Expense"));
const Credit = lazy(() => import("./pages/Credit/Credit"));
const Deposit = lazy(() => import("./pages/Deposit/Deposit"));
const GenerateReport = lazy(
  () => import("./pages/GenerateReport/GenerateReport")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

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
                  <Wallet />
                </Suspense>
              }
            />
            <Route
              path="financial-dashboard/"
              element={
                <Suspense fallback={<Loader />}>
                  <Wallet />
                </Suspense>
              }
            />
            <Route
              path="/income"
              element={
                <Suspense fallback={<Loader />}>
                  <Income />
                </Suspense>
              }
            />
            <Route
              path="/expense"
              element={
                <Suspense fallback={<Loader />}>
                  <Expense />
                </Suspense>
              }
            />
            <Route
              path="/credit"
              element={
                <Suspense fallback={<Loader />}>
                  <Credit />
                </Suspense>
              }
            />
            <Route
              path="/deposit"
              element={
                <Suspense fallback={<Loader />}>
                  <Deposit />
                </Suspense>
              }
            />
            <Route
              path="/generatereport"
              element={
                <Suspense fallback={<Loader />}>
                  <GenerateReport />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Box>
  );
}

export default App;
