import React, { SyntheticEvent, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
  Stack,
  Box,
  InputLabel,
  FilledInput,
  FormControl,
  InputAdornment,
  SwipeableDrawer,
  useMediaQuery,
  Drawer,
  styled,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ContactItem } from "./ContactItem";

export const ContactList = () => {
  const workDayBegining = 6;
  const workDayEnding = 21;
  const lengthOfList = Array(workDayEnding - workDayBegining + 1).fill("");
  const [state, setState] = useState(true);

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          width: "80%",
        },
      }}
      anchor="right"
      open={state}
      onClose={() => setState(false)}
      onOpen={() => setState(true)}
    >
      <Stack>
        {lengthOfList.map((_, index) => (
          <Box key={`${index}:00`}>
            <ContactItem hour={index + workDayBegining} minuts={":00"} />
            <ContactItem hour={index + workDayBegining} minuts={":30"} />
          </Box>
        ))}
      </Stack>
    </SwipeableDrawer>
  );
};
