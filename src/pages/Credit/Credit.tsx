import { Box, Typography, Button } from "@mui/material";

import {
  selectUserName,
  selectTotalBudget,
} from "../../features/financeSlice/financeSlice";

import { useSelector } from "react-redux";

const CreditPage = () => {
  const userName = useSelector(selectUserName);
  const totalBudget = useSelector(selectTotalBudget);
  const percentage = 20;

  return (
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
          Credit Score: 750
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 2, fontSize: "1.2rem", paddingLeft: "1rem" }}
        >
          Available Credit Limit:{" "}
          {(
            Math.round((totalBudget * (percentage / 100)) / 100) * 10
          ).toLocaleString()}
          $
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            mt: 2,
            ml: "1rem",
            ":hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Apply for Credit
        </Button>
      </Box>
    </Box>
  );
};

export default CreditPage;
