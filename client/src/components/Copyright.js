import { Typography, Link } from "@mui/material";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary">
      Copyright © 2022{" "}
      <Link href="/" color="inherit">
        D&S
      </Link>
    </Typography>
  );
};

export default Copyright;
