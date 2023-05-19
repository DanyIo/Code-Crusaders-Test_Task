import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CustomScrollBar = styled(Box)(({ theme }) => ({
  maxHeight: "300px",
  overflowY: "auto",
  width: "100%",
  mt: 2,

  "&::-webkit-scrollbar": {
    width: "6px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "black",
    borderRadius: "3px",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },

  "&::-webkit-scrollbar-track-piece": {
    background: "rgba(0, 0, 0, 0.1)",
    borderRadius: "3px",
  },
}));
