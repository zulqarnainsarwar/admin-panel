import React from "react";
import Header from "../components/Header";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

export const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Bar" subtitle="Welcome Bar Page" />
    </Box>
  );
};
