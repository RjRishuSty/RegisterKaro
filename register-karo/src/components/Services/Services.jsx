import { Stack, Typography } from "@mui/material";
import React from "react";
import CardSwiper from "../CardSwiper/CardSwiper";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LaptopIcon from "@mui/icons-material/Laptop";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Services = () => {
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
    <Stack component="section" sx={{ border: "2px solid red", py: 5 }}>
      <Typography
        sx={{
          fontSize: "3rem",
          textAlign: "center",
          color: "text.secondary",
          textTransform:'uppercase',
          fontWeight: 700,
          mb:3
        }}
      >
        Our Services
      </Typography>
      <CardSwiper data={data} useIn="service" />
    </Stack>
  );
};

export default Services;
