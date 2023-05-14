import * as React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    {[
      {
        to: "/",
        label: "Wallet",
        icon: <AccountBalanceWalletIcon sx={{ color: "white" }} />,
      },
      {
        to: "/income",
        label: "Income",
        icon: <AttachMoneyIcon sx={{ color: "white" }} />,
      },
      {
        to: "/expense",
        label: "Expense",
        icon: <ShoppingCartIcon sx={{ color: "white" }} />,
      },
      {
        to: "/deposit",
        label: "Deposit",
        icon: <BarChartIcon sx={{ color: "white" }} />,
      },
      {
        to: "/credit",
        label: "Credit",
        icon: <CreditCardIcon sx={{ color: "white" }} />,
      },
    ].map(({ to, label, icon }) => (
      <NavLink
        key={to}
        to={to}
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "white" : "inherit",
        })}
      >
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} sx={{ color: "white" }} />
        </ListItemButton>
      </NavLink>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <NavLink
      to={"/generatereport"}
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "white" : "inherit",
      })}
    >
      <ListItemButton>
        <ListItemIcon>
          <RequestQuoteIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Generate Report" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
