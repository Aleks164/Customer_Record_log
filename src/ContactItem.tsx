import React, { useState } from "react";
import { FormControl, InputAdornment, Input } from "@mui/material";

export const ContactItem = ({
  hour,
  minuts,
  setMainList,
  fullDate,
  mainList,
}: {
  hour: number;
  minuts: string;
}) => {
  const key = `${fullDate} ${hour}${minuts}`;
  const defaultValue = mainList[key] ? mainList[key] : "";
  const [value, setValue] = useState(defaultValue);

  return (
    <FormControl fullWidth sx={{ m: 0, ml: 1 }} variant="filled">
      <Input
        id={`item${hour + minuts}`}
        sx={{ fontSize: "30px" }}
        value={value}
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
