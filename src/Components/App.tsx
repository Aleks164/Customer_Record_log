import React, { useState } from "react";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import { Calendar } from "./Calendar";
import { MonthSelector } from "./MonthSelector";
import { monthListRu } from "../utiles/monthListRu";
import { daysOfWeak } from "../utiles/daysOfWeak";
import { firstDayOfWeak } from "../utiles/firstDayOfWeak";
import { lastDayOfMonth } from "../utiles/lastDayOfMonth";
import { monthRedactor } from "../utiles/monthRedactor";
import { ContactList } from "./ContactList";
import { useInitCalndar } from "@/hooks/useInitCalndar";

export type MainListType = {
  [key: string]: string;
};

export const App = () => {
  const {
    month,
    setMonthHandler,
    year,
    targetMonth,
    todayCheck,
    setMainListHandler,
    mainList,
  } = useInitCalndar();
  const [open, setOpen] = useState(false);
  const [openedDay, setOpenedDay] = useState(0);

  return (
    <Paper sx={{ p: 1, width: "max-content", maxWidth: "800px" }}>
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
            setOpen={setOpen}
            setOpenedDay={setOpenedDay}
            todayCheck={todayCheck}
          />
        </Grid>
        <ContactList
          open={open}
          setOpen={setOpen}
          mainList={mainList}
          setMainList={setMainListHandler}
          fullDate={`${openedDay} ${monthRedactor(
            monthListRu.indexOf(month)
          )} ${year}`}
        />
      </Grid>
    </Paper>
  );
};
