import React, { useState } from "react";
import { FormControl, InputAdornment, Input } from "@mui/material";
import { MainListType } from "./App";

export type ContactItemParamType = {
  hour: number;
  minuts: string;
  mainList: MainListType;
  setMainList: (key: string, value: string) => void;
  fullDate: string;
};

export const ContactItem = ({
  hour,
  minuts,
  setMainList,
  fullDate,
  mainList,
}: ContactItemParamType) => {
  const key = `${fullDate} ${hour}${minuts}`;
  const defaultValue = mainList[key] ? mainList[key] : "";
  const [value, setValue] = useState(defaultValue);

  return (
    <FormControl fullWidth sx={{ m: 0, ml: 1 }} variant="filled">
      <Input
        id={`item${hour + minuts}`}
        sx={{ fontSize: "30px" }}
        value={value}
        multiline
        onChange={(e) => {
          setValue(e.target.value);
          setMainList(key, e.target.value);
        }}
        startAdornment={
          <InputAdornment sx={{ pb: "15px" }} position="start">
            {hour}
            {minuts}
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
