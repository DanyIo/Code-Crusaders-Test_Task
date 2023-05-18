import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import {
  selectUserName,
  selectTotalBudget,
  selectCreditScore,
} from "../../features/financeSlice/financeSlice";

import CreditPageModalWindow from "./CreditPageMW/creditPageMW";

const CreditPage = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  const userName = useSelector(selectUserName);
  const totalBudget = useSelector(selectTotalBudget);
  const creditScore = useSelector(selectCreditScore);

  const percentage = 20;
  const creditLimit = Math.round((totalBudget * (percentage / 15)) / 100) * 10;

  useEffect(() => {
    if (showSuccessAlert) {
      const timeout = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccessAlert]);

  const handleShowAlert = () => {
    setShowSuccessAlert(true);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          backgroundColor: "#000000",
          borderRadius: "5%",
          padding: "2rem",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "45vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Credit Details
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: "1.2rem", paddingLeft: "1rem" }}
          >
            Name: {userName}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: "1.2rem", paddingLeft: "1rem" }}
          >
            Credit Score: {creditScore}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: "1.2rem", paddingLeft: "1rem" }}
          >
            Available Credit Limit: {creditLimit.toLocaleString()}$
          </Typography>
          <CreditPageModalWindow
            creditLimit={creditLimit}
            handleShowAlert={handleShowAlert}
            creditScore={creditScore}
          />
        </Box>
      </Box>
      {showSuccessAlert && (
        <Alert
          severity="success"
          sx={{
            backgroundColor: "black",
            color: "white",
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 9999,
          }}
        >
          Congrats, your application was successful
        </Alert>
      )}
    </>
  );
};

export default CreditPage;
