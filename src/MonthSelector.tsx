import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export type MonthSelectorParamType = {
  month: string;
  setMonth: (nextMonth: string) => void;
};

export const MonthSelector = ({ month, setMonth }: MonthSelectorParamType) => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    item
    xs={8}
    sx={{ minWidth: "max-content" }}
  >
    <Button
      variant="outlined"
      sx={{
        transform: "rotate(180deg)",
        padding: "5px 10px",
        minWidth: "unset",
      }}
      onClick={() => {
        setMonth("-1");
      }}
      startIcon={<PlayArrowIcon />}
    ></Button>
    <Typography
      variant="h4"
      sx={{ ml: 2, mr: 2, width: 150, textAlign: "center" }}
    >
      {month}
    </Typography>
    <Button
      variant="outlined"
      sx={{ padding: "5px 10px", minWidth: "unset" }}
      onClick={() => {
        setMonth("1");
      }}
      startIcon={<PlayArrowIcon />}
    ></Button>
  </Grid>
);
