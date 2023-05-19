import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "../Title/Title";
import { useSelector } from "react-redux";
import {
  selectStats,
  selectTotalBudget,
  upgradeStats,
} from "../../../features/financeSlice/financeSlice";
import { useAppDispatch } from "../../../app/hooks";

function createData(time: string, amount?: number) {
  return { time, amount };
}

export default function Chart() {
  const data = useSelector(selectStats);
  const totalBudget = useSelector(selectTotalBudget);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(upgradeStats(createData(new Date().toDateString(), totalBudget)));
    console.log(data);
  }, [totalBudget]);
  return (
    <React.Fragment>
      <Title>Wallet</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Budget ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
