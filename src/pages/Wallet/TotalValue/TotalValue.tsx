import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ListItemText } from "@mui/material";
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
      {/* <div>
        <NavLink
          to={"/generatereport"}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "white" : "inherit",
          })}
        >
          <ListItemText primary="Vie" />
        </NavLink>
      </div> */}
    </>
  );
}
