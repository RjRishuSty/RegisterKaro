import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";

const Logo = ({ useIn }) => {
  const xSmall = useMediaQuery("(max-width:900px)");
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      {useIn === "header" && (
        <img
          src={logo}
          alt="RegisterKaro"
          style={{ width: "auto", height: xSmall ? 50 : 60 }}
        />
      )}
      <Typography
        component="div"
        sx={{
          ml: xSmall ? -0.7 : useIn === "header" ? -1 : "",
          fontSize: xSmall ? 25 : 30,
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        Register
        <Typography
          component="span"
          sx={{
            fontSize: xSmall ? 25 :30,
            fontWeight: 700,
            color: "text.secondary",
          }}
        >
          Karo
        </Typography>
      </Typography>
    </Box>
  );
};

export default Logo;
