import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import {
  addNewIncome,
  addTransaction,
} from "../../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../../app/hooks";

import { useState } from "react";

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
  const [transactionDate, setTransactionDate] = useState(
    `${new Date().toDateString()}`
  );
  const [senderName, setSenderName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (
      transactionDate.trim() === "" ||
      senderName.trim() === "" ||
      paymentMethod.trim() === "" ||
      transactionAmount.trim() === "" ||
      isNaN(parseFloat(transactionAmount))
    ) {
      return;
    }

    const newIncome = createData(
      0,
      transactionDate,
      senderName,
      paymentMethod,
      parseFloat(transactionAmount)
    );

    dispatch(addNewIncome(newIncome));
    dispatch(
      addTransaction({
        action: "Income",
        amount: parseFloat(transactionAmount),
      })
    );

    setTransactionDate(`${new Date().toDateString()}`);
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
            defaultValue={`${new Date().toDateString()}`}
            sx={{
              width: "100%",
              borderRadius: 5,
            }}
            InputProps={{
              readOnly: true,
            }}
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
