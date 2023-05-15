import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Chart from "./Chart/Chart";
import Deposits from "./TotalValue/TotalValue";
import Orders from "./Orders/Orders";

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Georgia",
    fontSize: 14,
  },
});

const Wallet = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          flexGrow: 1,
          width: "80%",
          backgroundColor: "black",
          overflow: "auto",
          marginTop: 10,
          marginLeft: 14,
        }}
      >
        {/*<Toolbar />*/}
        <Container
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
          }}
        >
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Wallet;
