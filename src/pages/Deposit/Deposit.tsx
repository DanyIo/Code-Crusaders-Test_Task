import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { TextField, Button, Typography, Box } from "@mui/material";
import Alert from "@mui/material/Alert";

import {
  selectTotalBudget,
  addDeposit,
  reduceTheTotalBudget,
  addTransaction,
} from "../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../app/hooks";
import { depositSetGetService } from "../../services/depositSetGetService";
import { depositDeleteService } from "../../services/depositDeleteService";

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  const totalBudget = useSelector(selectTotalBudget);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showSuccessAlert) {
      const timeout = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccessAlert]);

  const handleDeposit = () => {
    const parsedDepositAmount = parseFloat(depositAmount);

    if (isNaN(parsedDepositAmount) || parsedDepositAmount <= 0) {
      return;
    }

    if (totalBudget < parsedDepositAmount) {
      return;
    }

    // depositSetGetService(
    //   parsedDepositAmount
    // );

    //depositDeleteService();

    dispatch((dispatch) => {
      dispatch(addDeposit(parsedDepositAmount));
      dispatch(reduceTheTotalBudget(parsedDepositAmount));
      dispatch(addTransaction({action : "Deposit", amount : parsedDepositAmount}))
    });
    setShowSuccessAlert(true);
    setDepositAmount("");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "3%",
          padding: "2rem",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{fontFamily: "Georgia" }}>
          Deposit Page
        </Typography>
        <TextField
          variant="outlined"
          label="Amount"
          type="number"
          placeholder={`Max amount ${totalBudget.toLocaleString()}$`}
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          sx={{ width: "300px", mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleDeposit}
          sx={{
            mt: 2,
            backgroundColor: "black",
            color: "white",
            ":hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Deposit
        </Button>
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
          Congrats, your deposit application was successful
        </Alert>
      )}
    </>
  );
};

export default DepositPage;
