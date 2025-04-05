import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CardSwiper from "../CardSwiper/CardSwiper";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";

const PartnerCompany = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const data = [
    { id: "1", icon: img1 },
    {
      id: "2",
      icon: img2,
    },
    { id: "3", icon: img3 },
    {
      id: "4",
      icon: img4,
    },
    {
      id: "5",
      icon: img5,
    },
    { id: "6", icon: img6 },
    { id: "7", icon: img7 },
    {
      id: "8",
      icon: img8,
    },
    { id: "9", icon: img9 },
    { id: "10", icon: img10 },
    {
      id: "12",
      icon: img8,
    },
      { id: "13", icon: img3 },
      {
        id: "14",
        icon: img4,
      },
      {
        id: "15",
        icon: img5,
      },
      { id: "16", icon: img6 },
      { id: "17", icon: img7 },
      {
        id: "18",
        icon: img8,
      },
      { id: "19", icon: img9 },
      { id: "20", icon: img10 },
      {
        id: "21",
        icon: img8,
      },
  ];
  return (
    <Stack component="section" sx={{ py: 10, backgroundColor:'#f9f7fd' }}>
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              textAlign: "center",
              color: "text.primary",
              fontWeight: 800,
            }}
          >
            We{" "}
            <Typography
              component="span"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: 700,
              }}
            >
              partner
            </Typography>{" "}
            with the best
            <br />
            so that your business can flow{" "}
            <Typography
              component="span"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: 700,
              }}
            >
              seamlessly
            </Typography>
            .
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 5 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 10px",
            mt: 1,
          }}
        >
          <Typography
            sx={{ color: "gray", fontSize: "1rem", textAlign: "center" }}
          >
            Your Business needs numerous expertise and that's why we are
            providing you the best services with the best names in the field .
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{ justifyContent: "center", alignItems: "center", mt: 3 }}
        >
          <CardSwiper data={data} useIn="partner" />
          <CardSwiper data={data.slice().reverse()} useIn="partner" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PartnerCompany;
