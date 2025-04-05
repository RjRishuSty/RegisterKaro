import { Button, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import img from "../../assets/why.png";
import Styles from "./WhyChoose.module.css";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const WhyChoose = () => {
    const miniTab = useMediaQuery('(max-width:1084px)')
  const data = [
    { id: "1", name: "Affordable" },
    { id: "2", name: "Compliance Ensured" },
    { id: "3", name: "Simplified Process" },
    { id: "4", name: "On-time Service" },
    { id: "5", name: "Instant Response" },
    { id: "6", name: "Industry Experts" },
  ];
  return (
    <Stack className={Styles.background} sx={{ py: 10 }}>
      <div className={`${Styles.circle} ${Styles.circle1}`}></div>
      <div className={`${Styles.circle} ${Styles.circle2}`}></div>
      <div className={`${Styles.circle} ${Styles.circle3}`}></div>
      <div className={`${Styles.circle} ${Styles.circle4}`}></div>
      <div className={`${Styles.circle} ${Styles.circle5}`}></div>

      <Container>
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   order: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "transparent",
              }}
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              //   order: { xs: 2, sm: 3, md: 1 },
            }}
          >
            <Typography
              gutterBottom
              component="p"
              sx={{
                color: "text.primary",
                fontSize: "2rem",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Why choose us
            </Typography>
            <Typography gutterBottom sx={{ fontSize: "1rem", color: "gray" }}>
              Our All-In-One Platform And Team Of Experts will help direct you
              in the right path and ensure that your business starts the right
              way in record time.
            </Typography>
            <Grid
              container
              rowSpacing={0.7}
              columnSpacing={{ md: 3, sm: 2, xs: 1 }}
              sx={{ mt: 2 }}
            >
              {data.map(({ id, name }) => (
                <Grid
                  key={id}
                  size={{ xs: 12, md: 6, sm: 6 }}
                //   sx={{ border: "2px solid blue" }}
                >
                  <Button
                    sx={{
                        fontSize:miniTab?12:"",
                         "&:hover":{
                        color:'text.secondary',
                        boxShadow:'0px 0px 5px #0d1321'
                    } }}
                    variant="button"
                    startIcon={
                      <KeyboardArrowRightIcon
                        sx={{ color: "text.secondary" }}
                      />
                    }
                  >
                    {name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default WhyChoose;
