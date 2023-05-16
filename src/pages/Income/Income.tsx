import Container from "@mui/material/Container";

import InputBlock from "./InputBlock/InputBlock";
import IncomeHistory from "./IncomeHistory/IncomeHistory";

export const Income = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        borderRadius: "3%",
        marginTop: 25,
        padding: "2rem",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "50px",
      }}
    >
      <InputBlock />
      <IncomeHistory />
    </Container>
  );
};

export default Income;
