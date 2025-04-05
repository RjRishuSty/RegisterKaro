import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { Button, useMediaQuery } from "@mui/material";
import MenuLists from "../MenuList/MenuLists";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// Elevation effect on scroll
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0, // Apply shadow when scrolled
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const miniTab = useMediaQuery("(max-width:1032px)");

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            py: 0.7,
            transition: "box-shadow 0.3s ease-in-out", // smooth elevation transition
            backgroundColor: "primary.main",
          }}
        >
          <Toolbar>
            <Logo useIn="header" />
            {!isMobile && (
              <>
                <MenuLists />
                {!miniTab && (
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      backgroundColor: "text.primary",
                      color: "#fff",
                      textTransform: "capitalize",
                      fontWeight: 600,
                      letterSpacing: 0.7,
                      ml: "auto", // pushes button to the right
                    }}
                    startIcon={<PermPhoneMsgIcon />}
                  >
                    Call Now
                  </Button>
                )}
              </>
            )}
            {isMobile && (
              <IconButton size="large" edge="start" aria-label="menu" sx={{ ml: "auto" }}>
                <MenuIcon sx={{ fontSize: 40, color: "text.primary" }} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
