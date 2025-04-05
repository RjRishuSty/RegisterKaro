import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import Styles from "./CardSwiper.module.css";
import { NavLink } from "react-router-dom";

const CardSwiper = ({ data, useIn }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation,Autoplay]}
      slidesPerView={3}
      className={Styles.mySwipper}
      spaceBetween={30}
    >
      {data.map((item) => (
        <SwiperSlide key={item.title}>
          <Card
            sx={{
              width: "100%",
              height: "auto",
              padding: "15px 5px",
              backgroundColor: "primary.light",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "text.secondary",
                filter: "brightness(90%)",
              },
            }}
          >
            <IconButton disableRipple>
              {React.cloneElement(item.icon, {
                sx: { fontSize: 80, color: "#fff" },
              })}
            </IconButton>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {item.name}
            </Typography>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CardSwiper;
