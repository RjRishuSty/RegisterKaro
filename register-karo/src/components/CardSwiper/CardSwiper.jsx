import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Autoplay } from "swiper/modules";
import {
  Box,
  Card,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Styles from "./CardSwiper.module.css";

const CardSwiper = ({ data, useIn }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={
        useIn === "service"
          ? isMobile
            ? 1
            : 3
          : useIn === "whatSay"
          ? 1
          : isMobile
          ? 5
          : 9
      }
      className={Styles.mySwipper}
      spaceBetween={useIn === "partner" ? 10 : 30}
    >
      {data.map((item) => (
        <SwiperSlide key={item.title || item.id}>
          <Card
            sx={{
              width:
                useIn === "service" || useIn === "whatSay" ? "100%" : "90px",
              height: useIn === "partner" ? "90px" : "auto",
              padding: useIn === "partner" ? "5px" : "15px 5px",
              backgroundColor: useIn === "service" ? "primary.light" : "#fff",
              display: "flex",
              justifyContent: useIn === "whatSay" ? "start" : "center",
              alignItems: useIn === "whatSay" ? "start" : "center",
              flexDirection: "column",
              cursor: "pointer",
              borderRadius:
                useIn === "service"
                  ? undefined
                  : useIn === "whatSay"
                  ? 2
                  : "100%",
              "&:hover": {
                backgroundColor:
                  useIn === "partner"
                    ? "text.primary"
                    : useIn === "service"
                    ? "text.secondary"
                    : "",
                boxShadow: useIn === "partner" ? "0px 0px 15px #ffa229" : "",
              },
            }}
          >
            {useIn === "service" ? (
              <>
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
              </>
            ) : useIn === "whatSay" ? (
              <Box sx={{ padding: "25px 20px",minHeight:'30vh' }}>
                <Typography gutterBottom variant="h5" sx={{ color: "gray" }}>
                  Post on{" "}
                  <span style={{ color: "#ffa229", fontWeight: 700 }}>
                    {item.postBy}
                  </span>
                </Typography>
                <Typography sx={{ mt: 2 }}>{item.content}</Typography>
              </Box>
            ) : (
              <img
                src={item.icon}
                alt="partner"
                style={{ width: "auto", height: "50px", objectFit: "contain" }}
              />
            )}
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
