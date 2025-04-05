import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { sections } from "./footerSection";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        width: "100%",
        height: "auto",
        py: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position:'rel',
        bottom: 0,
        left: 0,
        backgroundColor: "primary.light",
        // border: "2px solid red",
      }}
    >
      <Container maxWidth="false" sx={{ maxWidth: "90%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ md: 5, sm: 2, xs: 1 }}>
          {sections.map(({ id, name, services }) => (
            <Grid
              key={id}
              size={{ xs: 12, sm: 6, md: 6,lg:3 }} sx={{p:1}}
            >
              <Typography
                component="span"
                gutterBottom
                sx={{
                  width: "auto",
                  color: "text.secondary",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  textAlign: "center",
                  borderBottom: "2px solid gray",
                }}
              >
                {name}
              </Typography>
              <Box
                sx={{mt:2.5}}
              >
                {services.map(({ name }) => (
                  <Typography
                    gutterBottom
                    sx={{
                      color: "#fff",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <KeyboardDoubleArrowRightIcon
                      sx={{ fontSize: "25", mr: 0.6, color: "text.secondary" }}
                    />
                    {name}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
