import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import { addNewIncome, selectIncome } from "../../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../../app/hooks";
import { incomeSetService } from "../../../services/incomeSetService";  

import { useState } from "react";
import { incomeGetService } from "../../../services/incomeGetService";
import { incomeDeleteService } from "../../../services/incomeDeleteService";

function createData(
  id: number,
  date: string,
  name: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, paymentMethod, amount };
}

export default function InputBlock() {
  const allIncomes = useSelector(selectIncome);

  const [transactionDate, setTransactionDate] = useState("");
  const [senderName, setSenderName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (
      transactionDate.trim() === "" ||
      senderName.trim() === "" ||
      paymentMethod.trim() === "" ||
      transactionAmount.trim() === ""
    ) {
      return;
    }

    const newIncome = createData(
      allIncomes.length,
      transactionDate,
      senderName,
      paymentMethod,
      parseFloat(transactionAmount)
    );

    incomeSetService(
      newIncome.id, 
      newIncome.date,
      newIncome.name,
      newIncome.paymentMethod,
      newIncome.amount
    );

    incomeGetService();

    incomeDeleteService(10);

    dispatch(addNewIncome(newIncome));

    setTransactionDate("");
    setSenderName("");
    setPaymentMethod("");
    setTransactionAmount("");
  };

  return (
    <Box
      sx={{
        padding: "10px",
        paddingTop: 0,
        borderRadius: "5px",
        fontFamily: "Georgia",
        background: "white",
        width: "90%",
      }}
    >
      <h2
        style={{
          borderBottom: "1px solid grey",
          paddingTop: 10,
          paddingBottom: 10,
          margin: 10,
          fontWeight: "normal",
          color: "#3f51b5",
          fontSize: 26,
        }}
      >
        Fill new income
      </h2>
      <Grid container>
        <Grid
          item
          xs={6}
          style={{
            padding: 10,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              fontWeight: "normal",
              fontSize: 16,
            }}
          >
            Date of transaction
          </h3>
          <TextField
            variant="outlined"
            placeholder="13.05.2023"
            style={{
              width: "100%",
              borderRadius: 5,
            }}
            value={transactionDate}
            onChange={(e) => setTransactionDate(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            padding: 10,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              fontWeight: "normal",
              fontSize: 16,
            }}
          >
            Name of sender
          </h3>
          <TextField
            variant="outlined"
            placeholder="Zoreslava Shpak"
            style={{
              width: "100%",
              borderRadius: 5,
            }}
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            padding: 10,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              fontWeight: "normal",
              fontSize: 16,
            }}
          >
            Payment method
          </h3>
          <TextField
            variant="outlined"
            placeholder="VISA"
            style={{
              width: "100%",
              borderRadius: 5,
            }}
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            padding: 10,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              fontWeight: "normal",
              fontSize: 16,
            }}
          >
            Amount of transaction
          </h3>
          <TextField
            variant="outlined"
            placeholder="6 666"
            style={{
              width: "100%",
              borderRadius: 5,
            }}
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "black",
            width: "50%",
            color: "white",
            ":hover": {
              backgroundColor: "gray",
            },
          }}
          onClick={handleSubmit}
        >
          Add new income
        </Button>
      </Box>
    </Box>
  );
}
