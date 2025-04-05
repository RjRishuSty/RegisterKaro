import React from "react";
import Hero from "../../components/HeroSection/Hero";
import WhyChoose from "../../components/WhyChooseSection/WhyChoose";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services/>
      <WhyChoose/>
    </>
  );
};

export default Home;
