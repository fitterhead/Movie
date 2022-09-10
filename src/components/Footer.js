import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,

          width: "100vw",
          height: 128,
        },
      }}
    >
      <Paper variant="outlined" sx={{ backgroundColor: "gray" }}>
        Footer
      </Paper>
    </Box>
  );
}
