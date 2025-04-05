import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardSwiper from "../CardSwiper/CardSwiper";

const CustomerSay = () => {
  const data = [
    {
      id: "1",
      postBy: "Google",
      content:
        "We are one of India's highest rated service providers, known for completing business incorporations and compliance services in record time. Don't take our word for it—see for yourself!",
    },
    {
      id: "2",
      postBy: "Microsoft",
      content:
        "RegisterKaro provided seamless compliance support. Their dedication and quick turnaround time were impressive!",
    },
    {
      id: "3",
      postBy: "Amazon",
      content:
        "We’ve partnered with RegisterKaro for multiple services and they never disappoint. Their team is prompt and professional.",
    },
    {
      id: "4",
      postBy: "Apple",
      content:
        "The incorporation process was faster than expected. Highly recommend their expert team for legal and business services.",
    },
    {
      id: "5",
      postBy: "Meta",
      content:
        "RegisterKaro helped us with GST registration in just a few days. Excellent experience overall!",
    },
    {
      id: "6",
      postBy: "Netflix",
      content:
        "Their guidance throughout the FSSAI license application was top-notch. It saved us time and stress.",
    },
    {
      id: "7",
      postBy: "Adobe",
      content:
        "Very responsive and knowledgeable team. Our compliance needs were handled smoothly from start to finish.",
    },
    {
      id: "8",
      postBy: "Tesla",
      content:
        "A big shout-out to RegisterKaro for making our MSME registration a breeze. Amazing customer support!",
    },
    {
      id: "9",
      postBy: "Samsung",
      content:
        "Professional, reliable, and fast. They kept us informed during every stage of our LLP registration.",
    },
    {
      id: "10",
      postBy: "Spotify",
      content:
        "We loved the transparency and speed of service. RegisterKaro is definitely a name you can trust.",
    },
  ];

  return (
    <Stack sx={{ py: 10 ,overflow:'hidden'}}>
     
      <Container>
        <Typography
          variant="h4"
          sx={{ color: "text.primary", textAlign: "center", fontWeight: 700 }}
        >
          Hear What Our Customers
          <br />
          Have To Say
        </Typography>
        <Grid container sx={{ mt: 5 }} columnSpacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ padding: "5px 10px" }}>
            <Typography
              component="span"
              gutterBottom
              sx={{ fontSize: "1.5rem", fontWeight: 600, color: "GrayText" }}
            >
              <span
                style={{ color: "#164760", fontSize: "2rem", fontWeight: 800 }}
              >
                Register
              </span>
              <span
                style={{ color: "#ffa229", fontSize: "2rem", fontWeight: 800 }}
              >
                karo
              </span>{" "}
              is used by tens of thousands of founders to start, manage, and
              grow their business
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "text.secondary", fontWeight: 400, mt: 3 }}
            >
              20,000+
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Happy Customers
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "1rem", mt: 3 }}>
              We are one of India's highest rated service provider, we are know
              for completing Business incorporations and other compliance
              services in record time, don't have to believe us, read it by
              yourselves
            </Typography>
            <Typography variant="caption" sx={{ color: "#000", mt: 2 }}>
              RegisterKaro is a startup India registered company
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardSwiper data={data} useIn="whatSay" />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default CustomerSay;
