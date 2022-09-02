import React, { useState } from "react";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import { Calendar } from "./Calendar";
import { MonthSelector } from "./MonthSelector";
import { monthListRu } from "./utiles/monthListRu";
import { daysOfWeak } from "./utiles/daysOfWeak";
import { firstDayOfWeak } from "./utiles/firstDayOfWeak";
import { lastDayOfMonth } from "./utiles/lastDayOfMonth";
import { dataCreator } from "./utiles/dataCreator";
import { ContactList } from "./ContactList";

export default function App() {
  const curDate = new Date();
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();

  const [month, setMonth] = useState(monthListRu[curMonth]);
  const [year, setYear] = useState(curYear);

  const setMonthHandler = (nextMonth: string) => {
    setMonth((prevMonth) => {
      const monthIndex = monthListRu.indexOf(prevMonth);
      const changeDirection = monthIndex + +nextMonth;
      if (prevMonth === "Январь" && nextMonth === "-1") {
        setYear((prevYear) => prevYear - 1);
        return "Декабрь";
      }
      if (prevMonth === "Декабрь" && nextMonth === "1") {
        setYear((prevYear) => prevYear + 1);
        return "Январь";
      }
      return monthListRu[changeDirection];
    });
  };

  const targetMonth = dataCreator(year, monthListRu.indexOf(month), 1);

  return (
    <Paper sx={{ p: 1, minWidth: "max-content", backgroundColor: "gray" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          item
          sx={{ minWidth: "max-content" }}
        >
          <MonthSelector month={month} setMonth={setMonthHandler} />
          <Grid item>
            <Typography variant="h4">{year}</Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "100%", pb: 1, pt: 1 }}>
          <Divider />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Calendar
            firstDayOfWeak={daysOfWeak[firstDayOfWeak(targetMonth)]}
            lastDay={lastDayOfMonth(targetMonth)}
          />
        </Grid>
        <ContactList />
      </Grid>
    </Paper>
  );
}
