import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo/Logo";
import heroImg from "../../assets/hero.png";
import StartIcon from "@mui/icons-material/Start";

const Hero = () => {
  return (
    <Stack component='section' sx={{mt:5,py:10,backgroundColor:'#f9f7fd'}}>
      <Container sx={{}}>
        <Grid
          container
          rowGap={3}
          columnSpacing={{ md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              order: { xs: 2, sm: 3, md: 1 },
            }}
          >
            <Typography
              component="p"
              sx={{ color: "text.secondary", fontWeight: 300 }}
            >
              Focus on your vision —
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "text.primary",
                fontSize: "1.2rem",
                fontWeight: 500,
              }}
            >
              We’ll handle the compliance
            </Typography>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Logo useIn="heroSection" />
              <Typography gutterBottom sx={{ fontSize: "1rem", color: "gray" }}>
                Your one-stop solution for business registrations, tax filings,
                legal compliance, and more so you can focus on growing your
                business while we handle the paperwork.
              </Typography>
            </Box>
            <Button
              variant="contained"
              endIcon={<StartIcon sx={{ fontSize: "small" }} />}
              sx={{
                backgroundColor: "text.secondary",
                color: "#fff",
                filter: "brightness(95%)",
              }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <img
              src={heroImg}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Hero;
