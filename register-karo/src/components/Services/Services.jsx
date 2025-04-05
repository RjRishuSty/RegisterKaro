import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CardSwiper from "../CardSwiper/CardSwiper";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LaptopIcon from "@mui/icons-material/Laptop";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Services = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const data = [
    { id: "1", name: "Company Formation", icon: <ApartmentIcon /> },
    {
      id: "2",
      name: "Company Secretarial Services",
      icon: <BusinessCenterIcon />,
    },
    { id: "3", name: "Virtual Office Address", icon: <LaptopIcon /> },
    {
      id: "4",
      name: "Annual Compliance Services",
      icon: <AssignmentTurnedInIcon />,
    },
    {
      id: "5",
      name: "VAT Registration, Preparation & Filing",
      icon: <BabyChangingStationIcon />,
    },
    { id: "6", name: "Payroll Services", icon: <AccountBalanceWalletIcon /> },
    { id: "7", name: "Book keeping Services", icon: <ApartmentIcon /> },
    {
      id: "8",
      name: "Live Online Webinars & Workshops",
      icon: <AssignmentTurnedInIcon />,
    },
  ];
  return (
    <Stack component="section" sx={{ padding:'5rem 5px'}}>
      <Grid container sx={{justifyContent:'center',alignItems:'center'}}>
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{justifyContent:'center',alignItems:'center'}}>
          <Typography
            sx={{
              fontSize: isMobile ? "2rem" : "3rem",
              textAlign: "center",
              color: "text.secondary",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Our Services
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{justifyContent:'center',alignItems:'center',padding:'0px 10px'}}>
          <Typography sx={{color:'gray', fontSize:'0.9rem',textAlign:'center'}}>
            At RegisterKaro, we simplify the complexities of business compliance
            and registrations, making it easier for you to focus on growth.
            Backed by a team of seasoned professionals and legal experts, we
            offer fast, affordable, and reliable services tailored to startups,
            SMEs, and established enterprises.
          </Typography>
        </Grid>
        <Grid size={{xs:12,sm:12,md:12}} sx={{justifyContent:'center',alignItems:'center',mt:3}}>
        <CardSwiper data={data} useIn="service" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Services;
