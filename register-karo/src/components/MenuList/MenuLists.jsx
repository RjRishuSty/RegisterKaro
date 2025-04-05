import React from "react";
import { pages } from "./pages";
import Styles from "./MenuList.module.css";
import { Box, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

const MenuLists = () => {
  const miniTab = useMediaQuery("(max-width:1189px)");
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        // border:'2px solid red'
      }}
    >
      {pages.map((item) => (
        <MenuItem sx={{ borderRadius: 2, mx: 1 }}>
          <NavLink
            key={item.id}
            to={item.path}
            aria-label={item.name}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {isActive && (
                  <Box
                    className={Styles.circle}
                    sx={{ backgroundColor: "text.secondary", mx: miniTab?0.5:1 }}
                  ></Box>
                )}
                <Typography
                  variant="button"
                  sx={{
                    color: isActive ? "text.secondary" : "text.primary",
                    fontWeight: 500,
                    fontSize: 17,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            )}
          </NavLink>
        </MenuItem>
      ))}
    </Box>
  );
};

export default MenuLists;
