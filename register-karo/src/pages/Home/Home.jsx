import React from "react";
import Hero from "../../components/HeroSection/Hero";
import WhyChoose from "../../components/WhyChooseSection/WhyChoose";
import Services from "../../components/Services/Services";
import PartnerCompany from "../../components/PartnerCompany/PartnerCompany";
import CustomerSay from "../../components/CustomerSay/CustomerSay";
import CubeBackground from "../../components/Background/CubeBackground/CubeBackground";
import InputForm from "../../components/InputForm/InputForm";

const Home = () => {
  return (
    <>
     <CubeBackground />
      <Hero />
      <Services />
      <WhyChoose />
      <PartnerCompany />
      <CustomerSay/>
      <InputForm/>
    </>
  );
};

export default Home;
