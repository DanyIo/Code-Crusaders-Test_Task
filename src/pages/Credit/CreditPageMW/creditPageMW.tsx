import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import {
  addCredit,
  addTransaction,
  increaseTotalBudget,
} from "../../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../../app/hooks";
import { creditSetGetService } from "../../../services/creditSetGetService";
import { creditDeleteService } from "../../../services/creditDeleteService";

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

interface ICreditPageModalWindow {
  creditLimit: number;
  handleShowAlert: Function;
  creditScore: number;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreditPageModalWindow({
  creditLimit,
  handleShowAlert,
  creditScore,
}: ICreditPageModalWindow) {
  const [creditAmount, setCreditAmount] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (creditAmount.trim() === "") {
      return;
    } else {
      const numericRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
      if (!numericRegex.test(creditAmount)) {
        return;
      } else {
        const parsedAmount = parseFloat(creditAmount);
        if (parsedAmount >= creditLimit || parsedAmount === 0) {
          return;
        } else {
          dispatch((dispatch) => {
            dispatch(addCredit(parsedAmount));
            dispatch(increaseTotalBudget(parsedAmount));
            dispatch(addTransaction({action : "Credit", amount: parsedAmount}))
          });
          creditSetGetService(parsedAmount);

          //creditDeleteService();

          setCreditAmount("");
          handleShowAlert();
          handleClose();
        }
      }
    }
  };

  return (
    <div>
      <Button
        disabled={creditScore === 0}
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          mt: 2,
          ml: "1rem",
          ":hover": {
            backgroundColor: "gray",
          },
        }}
        onClick={handleOpen}
      >
        Apply for Credit
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              ...style,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              id="spring-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              Input credit amount
            </Typography>
            <TextField
              variant="outlined"
              placeholder={`Max value ${creditLimit.toLocaleString()}$`}
              style={{
                width: "75%",
                borderRadius: 5,
              }}
              value={creditAmount}
              onChange={(e) => setCreditAmount(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "black",
                color: "white",
                mt: 2,
                ":hover": {
                  backgroundColor: "gray",
                },
                width: "50%",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
