import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField/TextField";

export default function InputBlock() {
  return (
    <Box
      sx={{
        padding: "10px",
        paddingTop: 0,
        borderRadius: "5px",
        fontFamily: "Georgia",
        background: "white",
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
        Input new income
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
            style={{
              width: "100%",
              borderRadius: 5,
            }}
          ></TextField>
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
            style={{
              width: "100%",
              borderRadius: 5,
            }}
          ></TextField>
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
            style={{
              width: "100%",
              borderRadius: 5,
            }}
          ></TextField>
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
            Amount of tranaction
          </h3>
          <TextField
            variant="outlined"
            style={{
              width: "100%",
              borderRadius: 5,
            }}
          ></TextField>
        </Grid>
      </Grid>
    </Box>
  );
}
