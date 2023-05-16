import Container from "@mui/material/Container";

import InputBlock from "./InputBlock/InputBlock";
import IncomeHistory from "./IncomeHistory/IncomeHistory";

export const Income = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "200px",
        paddingTop: "30px",
        paddingBottom: "30px",
        background: "black",
      }}
    >
      <InputBlock />
      <IncomeHistory />
    </Container>
  );
};

export default Income;
