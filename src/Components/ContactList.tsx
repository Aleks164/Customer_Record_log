import React from "react";
import {
  Stack,
  Box,
  SwipeableDrawer,
  useMediaQuery,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import { ContactItem } from "./ContactItem";
import { MainListType } from "./App";

export type ContactListParamType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mainList: MainListType;
  setMainList: (key: string, value: string) => void;
  fullDate: string;
};

export const ContactList = ({
  open,
  setOpen,
  mainList,
  setMainList,
  fullDate,
}: ContactListParamType) => {
  const workDayBegining = 6;
  const workDayEnding = 21;
  const lengthOfList = Array(workDayEnding - workDayBegining + 1).fill("");

  const isSmallScreen = useMediaQuery("(min-width:600px)");

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          width: `${isSmallScreen ? "50%" : "80%"}`,
        },
      }}
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">{fullDate}</Typography>
        </Toolbar>
      </AppBar>

      <Stack>
        {lengthOfList.map((_, index) => (
          <Box key={`${index}:00`}>
            <ContactItem
              mainList={mainList}
              setMainList={setMainList}
              hour={index + workDayBegining}
              minuts={":00"}
              fullDate={fullDate}
            />
            <ContactItem
              mainList={mainList}
              setMainList={setMainList}
              hour={index + workDayBegining}
              minuts={":30"}
              fullDate={fullDate}
            />
          </Box>
        ))}
      </Stack>
    </SwipeableDrawer>
  );
};
