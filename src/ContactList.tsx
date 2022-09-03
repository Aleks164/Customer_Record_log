import React, { useState } from "react";
import { Stack, Box, SwipeableDrawer } from "@mui/material";
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
