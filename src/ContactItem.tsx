import React, { useState } from "react";
import { FormControl, InputAdornment, Input } from "@mui/material";

export const ContactItem = ({
  hour,
  minuts,
}: {
  hour: number;
  minuts: string;
}) => {
  const [value, setValue] = useState("");

  return (
    <FormControl fullWidth sx={{ m: 0, ml: 1 }} variant="filled">
      <Input
        id={`item${hour + minuts}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
