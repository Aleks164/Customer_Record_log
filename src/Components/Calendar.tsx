import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { daysOfWeak } from "../utiles/daysOfWeak";

export type CalendarParamType = {
  firstDayOfWeak: string;
  lastDay: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDay: React.Dispatch<React.SetStateAction<number>>;
  todayCheck: number | false;
};

export const Calendar = ({
  firstDayOfWeak,
  todayCheck,
  lastDay,
  setOpen,
  setOpenedDay,
}: CalendarParamType) => {
  const convertedDayOfWeak =
    daysOfWeak.indexOf(firstDayOfWeak) === 0
      ? 6
      : daysOfWeak.indexOf(firstDayOfWeak) - 1;
  const emptyWeakDays = Array(convertedDayOfWeak)
    .fill("")
    .map((_, index) => <div key={index + 32}></div>);

  const weekendCheck = (index: number) =>
    (daysOfWeak.indexOf(firstDayOfWeak) + index + 1) % 7 === 0 ||
    (daysOfWeak.indexOf(firstDayOfWeak) + index) % 7 === 0;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        width: "100%",
      }}
    >
      {daysOfWeak.map((el) => (
        <Typography
          variant="h6"
          key={el}
          sx={{
            textAlign: "center",
            borderRight: "1px solid #e2edf9",
            mb: "7px",
          }}
        >
          {el}
        </Typography>
      ))}
      {emptyWeakDays.concat(
        Array(31)
          .fill("")
          .map((_, index) =>
            index + 1 <= lastDay ? (
              <Button
                sx={{
                  height: "75px",
                  border: `${todayCheck === index + 1 ? "4px solid red" : ""}`,
                  color: `${weekendCheck(index) ? "red" : ""}`,
                }}
                key={index}
                onClick={() => {
                  setOpen(true);
                  setOpenedDay(index + 1);
                }}
                variant="outlined"
              >
                {index + 1}
              </Button>
            ) : (
              <div key={index}></div>
            )
          )
      )}
    </Box>
  );
};
