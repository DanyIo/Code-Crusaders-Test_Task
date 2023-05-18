import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Title from "../Title/Title";
import { useSelector } from "react-redux";
import { selectTotalBudget } from "../../../features/financeSlice/financeSlice";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function TotalValue() {
  const totalBudget = useSelector(selectTotalBudget);

  return (
    <>
      <Title>Total Balance</Title>
      <Typography component="p" variant="h4">
        ${totalBudget.toLocaleString()}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}
