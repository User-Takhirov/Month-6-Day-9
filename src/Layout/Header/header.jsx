import { Stack, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <>
      <Stack textAlign={"center"} py={"10px"} bgcolor={"#962dc3"} mb={"20px"}>
        <Typography variant="h2" color="white">
          Header
        </Typography>
      </Stack>
    </>
  );
};
